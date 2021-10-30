import React, { useState, useEffect } from "react";
import messageSchema from "../utils/messageSchema";
import * as Yup from "yup";
//import axios from 'axios'

const NewMessage = (props) => {
  const initialMessage = {
    title: "",
    receiver: "",
    body: "",
  };

  const initialErrors = {
    title: "",
    receiver: "",
    body: "",
  };

  const [message, setMessage] = useState(initialMessage);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled,setDisabled] = useState(true)

  const change = (e) => {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
    Yup.reach(messageSchema, name)
      .validate(value)
      .then((res) => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));

  };

  const submit = (e) => {
    e.preventDefault();
    setMessage(initialMessage);
    /*axios.post(url,message)
        .then()
        .catch()*/
  };

  useEffect(()=>{
      messageSchema.isValid(message)
        .then(res => setDisabled(!res))
  },[message])

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <input
            name="title"
            type="text"
            value={message.title}
            onChange={change}
            placeholder="Title"
          />
          <div>{errors.title}</div>
        </div>

        <div>
          <input
            name="receiver"
            type="text"
            value={message.receiver}
            onChange={change}
            placeholder="Recipient"
          />
          <div>{errors.receiver}</div>
        </div>

        <div>
          <textarea
            type="text"
            name="body"
            value={message.body}
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
