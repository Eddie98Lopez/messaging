import React, {useContext} from "react";
import MessageThumb from "./MessageThumb";
import { useParams } from "react-router-dom";
import { MessagesContext } from "../utils/MessageListContext";

const MessageFolder = (props) => {
  //const { messages } = props;
  const { folder } = useParams();
  const [messages,setMessages]= useContext(MessagesContext)

  return (
    <div>
      <h2>{folder}</h2>

      {folder !== 'compose' && messages[`${folder}`].map((message) => (
        <MessageThumb key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageFolder;
