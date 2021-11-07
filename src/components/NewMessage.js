import React, { useState, useEffect } from "react";
import {
  messageSchema,
  axiosWithAuth,
  baseUrl,
  fetchMessages,
  useStore,
  sendErrMsg,
  newErrAction
} from "../utils";
import{ Form, Input, Button, TextArea} from './styled-components'
import * as Yup from "yup";
import { useHistory } from "react-router-dom";



const NewMessage = (props) => {
  const { push } = useHistory();
  const initialDraft = {
    title: "",
    receiver: "",
    body: "",
  };

  const initialErrors = {
    title: "",
    receiver: "",
    body: "",
  };

  const [draft, setDraft] = useState(initialDraft);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(true);
  const { store, dispatch } = useStore();


  const change = (e) => {
    const { name, value } = e.target;
    setDraft({ ...draft, [name]: value });
    Yup.reach(messageSchema, name)
      .validate(value)
      .then((res) => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  const discard = (e) => {
    e.stopPropagation()
    dispatch({type:"RESET_REPLY"})
    //setDraft(initialDraft)
    push('/dash/folder/inbox')

  }

  const submit = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      try {
        const newMessage = await axiosWithAuth().post(`${baseUrl}messages/`,draft);
        newMessage.data.data = "success" && fetchMessages(dispatch)
        push("/dash/folder/inbox");} 

      catch {
        dispatch({type:newErrAction, payload: sendErrMsg})
        
      }
    };
    fetchData();

  };

  useEffect(()=>{
    store.reply !== null && setDraft({...draft, ...store.reply, title:`RE: ${store.reply.title}`})

  },[])

  useEffect(() => {
    messageSchema.isValid(draft).then((res) => setDisabled(!res));
  }, [draft]);

  return (
    <div>
      <Form onSubmit={submit} >
        <div>
          <Input
            name="title"
            type="text"
            value={draft.title}
            onChange={change}
            placeholder="Title"
          />
          <div className='errors'>{errors.title}</div>
        </div>

        <div>
          <Input
            name="receiver"
            type="text"
            value={draft.receiver}
            onChange={change}
            placeholder="Recipient"
          />
          <div className='errors'>{errors.receiver}</div>
        </div>

        <div>
          <TextArea
            type="text"
            name="body"
            value={draft.body}
            onChange={change}
            placeholder="type your message here..."
          />
          <div className='errors'>{errors.body}</div>
        </div>

        <Button onClick={discard}>Discard</Button>
        <Button disabled={disabled}>Send</Button>
      </Form>
    </div>
  );
};

export default NewMessage;
