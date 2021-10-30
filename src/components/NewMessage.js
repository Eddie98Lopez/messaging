import React, { useState } from "react";

const NewMessage = (props) => {
  const initialMessage = {
    title: "",
    receiver: "",
    body: "",
  };

  const [message, setMessage] = useState(initialMessage);

  const change = (e) => {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
    console.log(message);
  };

  const submit = (e) => {
    e.preventDefault();
    setMessage(initialMessage)
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          name="title"
          type="text"
          value={message.title}
          onChange={change}
          placeholder="Title"
        />

        <input
          name="receiver"
          type="text"
          value={message.receiver}
          onChange={change}
          placeholder="Recipient"
        />

        <textarea
          type="text"
          name="body"
          value={message.body}
          onChange={change}
          placeholder="type your message here..."
        />

        <button>Send</button>
      </form>
    </div>
  );
};

export default NewMessage;
