import React from "react";
import { useHistory, useParams } from "react-router";
import { Icon, Thumb } from "./styled-components";
import { deleteIcon, reply } from "../design-assets";
import { deleteMessage, useStore} from "../utils";

const MessageThumb = (props) => {
  const { title, sender, id, receiver,read } = props.message;
  const { push } = useHistory();
  const { folder } = useParams();
  const {dispatch} = useStore()

  const handleClick= (e) => {
    e.stopPropagation()
    push(`/dash/folder/${folder}/${id}`)}
  
  const toCompose = e => {
    e.stopPropagation()
    dispatch({type:'REPLY', payload:{...props.message}})
    push('/dash/compose')
  }

  return (
    <Thumb read={read.toString()} onClick={handleClick}>
      <div className="messInfo" >
        <p>{folder === "sent" ? receiver : sender}</p>
        <h3>{title}</h3>
      </div>

      <div className="buttons">
        <Icon
          img={reply}
          alt="reply"
          height={"1.25rem"}
          onClick={toCompose}
        />

        <Icon
          img={deleteIcon}
          alt="delete"
          height={"1.25rem"}
          onClick={()=>deleteMessage(dispatch,id)}
        />
      </div> 
    </Thumb>
  );
};

export default MessageThumb;
