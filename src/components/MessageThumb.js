import React, {useState} from "react";
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
  const [seen, setSeen] = useState(read)

  const handleClick= (e) => {
    e.stopPropagation()
  dispatch({type:setCurrAct,payload:props.message})
  setSeen(true)
  /* axios.put(url,{...props.message,read:true}) */
}


const handleReply =(e)=>{
  e.stopPropagation()
  
  dispatch({type:'REPLY', payload:{receiver:sender,title}})
  push('/dash/compose')
}
  

  return (
    <Thumb read={seen} onClick={handleClick}>
      <div className="messInfo" >
        <p>{folder === "sent" ? receiver : sender}</p>
        <h3>{title}</h3>
      </div>

      <div className="buttons">
        <Icon
          img={reply}
          alt="reply"
          height={"1.25rem"}
          onClick={handleReply}
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
