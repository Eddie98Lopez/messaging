import React, { useState, useEffect, useContext } from "react";
import {
  messageSchema,
  axiosWithAuth,
  MessagesContext,
  baseUrl,
  fetchMessages,
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
  const [sendErr,setSendErr] = useState('')
  const [messages, setMessages] = useContext(MessagesContext);

  const change = (e) => {
    const { name, value } = e.target;
    setDraft({ ...draft, [name]: value });
    Yup.reach(messageSchema, name)
      .validate(value)
      .then((res) => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  const submit = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      try {
        const newMessage = await axiosWithAuth().post(`${baseUrl}messages/`,draft);
        newMessage.data.data = "success"
          ? fetchMessages(setMessages)
          : console.log("something went wrong");
      } 
      catch {
        setSendErr('Your message did dont send. Please try again.');
      }
    };
    fetchData();
    push("/dash/inbox");
  };

  useEffect(() => {
    messageSchema.isValid(draft).then((res) => setDisabled(!res));
  }, [draft]);

  return (
    <div>
      <Form onSubmit={submit}>
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

        <div className='errors'>{sendErr}</div>

        <Button disabled={disabled}>Send</Button>
      </Form>
    </div>
  );
};

export default NewMessage;
