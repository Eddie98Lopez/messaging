import React, { useContext, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Icon } from "./styled-components";
import { MessagesContext } from "../utils/MessageListContext";
import { deleteIcon, reply } from "../design-assets";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useEffect } from "react/cjs/react.development";

const MessageDetails = (props) => {
  const { folder, id } = useParams();
  const { push, goBack } = useHistory();

  const [messages, setMessage] = useContext(MessagesContext);
  const [details,setDetails]=useState({});
  const { title, body, sender, receiver } = details;

  useEffect(()=>{
    axiosWithAuth()
      .get(`https://messaging-test.bixly.com/messages/${id}`)
      .then(res => {
        console.log(res)
        setDetails(res.data)
      })
      .catch(err => console.log(err))
  },[])



  const deleteMessage = () => {

    axiosWithAuth()
      .delete(`https://messaging-test.bixly.com/messages/${id}`)
      .then(res => console.log(res))
      .catch(err=>console.log)
    
    setMessage({
      ...messages,
      [folder]: messages[`${folder}`].filter((item) => item !== details),
    });

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

      <div onClick={deleteMessage}>
        <Icon img={deleteIcon} alt="delete" />
      </div>
    </div>
  );
};

export default MessageDetails;
