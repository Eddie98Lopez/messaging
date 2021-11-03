import React from "react";
import { useHistory, useParams } from "react-router";
import { Icon, Thumb } from "./styled-components";
import { deleteIcon, reply } from "../design-assets";
import { deleteMessage, useStore} from "../utils";
import { setCurrAct } from "../utils/context/actions";

const MessageThumb = (props) => {
  const { title, sender, id, receiver,read } = props.message;
  const { push } = useHistory();
  const { folder } = useParams();
  const {dispatch} = useStore()

  const handleClick= () => {
  dispatch({type:'READ_MESSAGE', payload: {folder: folder, message:props.message}})
  dispatch({type:setCurrAct,payload:props.message})}

  return (
    <Thumb read={read} onClick={handleClick}>
      <div className="messInfo" >
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
          onClick={()=>deleteMessage(dispatch,id)}
        />
      </div>
    </Thumb>
  );
};

export default MessageThumb;
