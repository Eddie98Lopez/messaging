import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Icon } from "./styled-components";
import { MessagesContext, deleteMessage} from "../utils";
import { deleteIcon, reply } from "../design-assets";


const MessageDetails = (props) => {
  const { folder, id } = useParams();
  const { push, goBack } = useHistory();

  const [messages, setMessages] = useContext(MessagesContext);
  const details = messages[`${folder}`].filter(item => item.id == id)[0]
  const { title, body, sender, receiver } = details;


  const deleteAndGoBack = () => {
    deleteMessage([messages,setMessages],id)
    push(`/dash/${folder}`);
  };

  return (
    <div>
      <div>
        <Icon alt="go back" onClick={goBack} />
        <Icon img={reply} alt="reply" onClick={() => push("/dash/compose")} />
      </div>

      <div>
        <h2>{title}</h2>
        <h4>{folder === "sent" ? `to: ${receiver}` : `from: ${sender}`}</h4>
        <p>{body}</p>
      </div>

      <div onClick={deleteAndGoBack}>
        <Icon img={deleteIcon} alt="delete" />
      </div>
    </div>
  );
};

export default MessageDetails;
