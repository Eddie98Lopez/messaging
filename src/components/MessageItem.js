import React, {useState} from "react";
import { useHistory, useParams } from "react-router";
import { Icon, Thumb } from "./styled-components";
import { deleteIcon, reply } from "../design-assets";
import { deleteMessage, useStore, replyMessage} from "../utils";

const MessageItem = (props) => {
  const { title, sender, id, receiver} = props.message;
  console.log(props.message)
  let {read} = props.message
  const [seen, setSeen] = useState(read)

  const { push } = useHistory();
  const { folder } = useParams();
  const {dispatch} = useStore()

  const handleClick= (e, read) => {
    e.stopPropagation()
    setSeen(true)
    dispatch({type:'READ_MESSAGE', payload:{folder,message:props.message}})
    /* axios.put(`url/${id}`,{...message, read:true}) */
    push(`/dash/folder/${folder}/${id}`)
  }
  
  const toReply = e => {
    e.stopPropagation();
    replyMessage(dispatch,{title,sender})
    push("/dash/compose");
  }

  return (
    <Thumb read={seen.toString()} onClick={handleClick}>
      <div className="messInfo" >
        <p>{folder === "sent" ? receiver : sender}</p>
        <h3>{title}</h3>
      </div>

      <div className="buttons">
        <Icon
          img={reply}
          alt="reply"
          height={"inherit"}
          onClick={toReply}
        />

        <Icon
          img={deleteIcon}
          alt="delete"
          height={"inherit"}
          onClick={()=>deleteMessage(dispatch,id)}
        />
      </div> 
    </Thumb>
  );
};

export default MessageItem;
