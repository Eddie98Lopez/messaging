import React from "react";
import MessageThumb from "./MessageThumb";
import { useParams } from "react-router-dom";

const MessageFolder = (props) => {
  const { messages } = props;
  const { folder } = useParams();

  return (
    <div>
      <h2>{folder}</h2>

      {messages.map((message) => (
        <MessageThumb key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageFolder;
