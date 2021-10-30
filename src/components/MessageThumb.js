import React, { useContext } from "react";
import { useHistory, useParams } from "react-router";
import { Icon, Thumb } from "./styled-components";
import { deleteIcon, reply } from "../design-assets";
import { MessagesContext } from "../utils/MessageListContext";

const MessageThumb = (props) => {
  const { title, sender, id, receiver } = props.message;
  const { push } = useHistory();
  const { folder } = useParams();

  const [messages, setMessages] = useContext(MessagesContext);

  const detailLink = () => {
    push(`/dash/${folder}/${id}`);
  };

  const deleteMessage = () => {
    setMessages({
      ...messages,
      [folder]: messages[`${folder}`].filter((message) => message.id !== id),
    });
  };

  return (
    <Thumb>
      <div className="messInfo" onClick={detailLink}>
        <p>{folder === "sent" ? receiver : sender} | </p>
        <h3>{title}</h3>
      </div>

      <div className="buttons">
        <Icon
          img={reply}
          alt="reply"
          height={"1.25rem"}
          onClick={() => push("/dash/compose")}
        />

        <Icon
          img={deleteIcon}
          alt="delete"
          height={"1.25rem"}
          onClick={deleteMessage}
        />
      </div>
    </Thumb>
  );
};

export default MessageThumb;
