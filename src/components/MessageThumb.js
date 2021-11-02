import React from "react";
import { useHistory, useParams } from "react-router";
import { Icon, Thumb } from "./styled-components";
import { deleteIcon, reply } from "../design-assets";
import { deleteMessage, useStore } from "../utils";

const MessageThumb = (props) => {
  const { title, sender, id, receiver,read } = props.message;
  const { push } = useHistory();
  const { folder } = useParams();

  const [messages, setMessages] = useStore();

  const detailLink = () => {
    push(`/dash/${folder}/${id}`);
  };



  return (
    <Thumb read={read}>
      <div className="messInfo" onClick={detailLink}>
        <p>{folder === "sent" ? receiver : sender}</p>
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
          onClick={()=>deleteMessage([messages,setMessages],id)}
        />
      </div>
    </Thumb>
  );
};

export default MessageThumb;
