import React from "react";
import MessageThumb from "./MessageThumb";
import { useParams } from "react-router-dom";
import { useStore } from "../utils";

const MessageFolder = (props) => {
  //const { messages } = props;
  const { folder } = useParams();
  const [messages,]= useStore()

  return (
    <div>
      {folder !== 'compose' && 
      messages[`${folder}`].map((message) => (
      <MessageThumb key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageFolder;
