import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router";
import { Icon, Thumb } from "./styled-components";
import { deleteIcon, reply } from "../design-assets";
import { deleteMessage, useStore, replyMessage, readMessage} from "../utils";

const MessageItem = (props) => {
  const { title, sender, id, receiver, read} = props.message;
  const { push } = useHistory();
  const { folder } = useParams();
  const {dispatch} = useStore()

  const [seen, setSeen] = useState(read)

  useEffect(()=>{
    folder === 'sent' && setSeen(true)
  },[])

  const handleClick= (e) => {
    e.stopPropagation()
    setSeen(true)
    readMessage(dispatch,folder,props.message)
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
