import React, { useState } from "react";
import * as Yup from "yup";

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

  const change = (e) => {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
    console.log(message);
  };

  const submit = (e) => {
    e.preventDefault();
    setMessage(initialMessage);
  };

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

        <button>Send</button>
      </form>
    </div>
  );
};

export default NewMessage;
