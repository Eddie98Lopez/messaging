import React, { useState, useEffect, useContext } from "react";
import messageSchema from "../utils/messageSchema";
import * as Yup from "yup";
import { MessagesContext } from "../utils/MessageListContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";

//import axios from 'axios'

const NewMessage = (props) => {
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
    axiosWithAuth()
      .post("https://messaging-test.bixly.com/messages/", draft)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setMessages({
      ...messages,
      sent: [...messages.sent, { ...draft, id: Date.now() }],
    });
    setDraft(initialDraft);
  };

  useEffect(() => {
    messageSchema.isValid(draft).then((res) => setDisabled(!res));
  }, [draft]);

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <input
            name="title"
            type="text"
            value={draft.title}
            onChange={change}
            placeholder="Title"
          />
          <div>{errors.title}</div>
        </div>

        <div>
          <input
            name="receiver"
            type="text"
            value={draft.receiver}
            onChange={change}
            placeholder="Recipient"
          />
          <div>{errors.receiver}</div>
        </div>

        <div>
          <textarea
            type="text"
            name="body"
            value={draft.body}
            onChange={change}
            placeholder="type your message here..."
          />
          <div>{errors.body}</div>
        </div>

        <button disabled={disabled}>Send</button>
      </form>
    </div>
  );
};

export default NewMessage;
