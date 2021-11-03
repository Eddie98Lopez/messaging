import React from "react";
import { deleteIcon, reply, backIcon } from "../design-assets";
import { Icon, DetailsWrapper,Button,DetailButtons } from "./styled-components";
import { useStore, deleteMessage} from "../utils";
import { useHistory, useParams } from "react-router";

const Details = (props) => {
 
 
 const {folder,id} = useParams()
  const {dispatch} = useStore();
  const { push } = useHistory();

  const { title, body, sender, receiver,sent } = props.message;
  const date = new Date(sent)



  const deleteAndGoBack = () => {
    deleteMessage(dispatch,id)
    push(`/dash/folder/${folder}`);
  };

  const replyMessage = (e) => {
    e.stopPropagation()
    dispatch({type:'REPLY',payload:{title,receiver:sender}})
    push('/dash/compose')
  } 
  



  


  return (
    <div>
      <DetailButtons>
        <div><Button onClick={()=>push(`/dash/folder/${folder}`)}><Icon  img={backIcon} alt="go back" /></Button></div>       
        <div>
        <Button onClick={replyMessage} ><Icon img={reply} alt="reply"/></Button>
        <Button onClick={deleteAndGoBack} ><Icon img={deleteIcon} alt="delete" /></Button>
        </div>
        
      </DetailButtons>

      <DetailsWrapper>
        <h2>{title}</h2>
        <h3>{`from: ${sender}`}</h3>
        <h4>{`to: ${receiver}`}</h4>
        <h4>{date.toLocaleString()}</h4> 
        <p>{body}</p>
      </DetailsWrapper>
      


    
    </div>
  );
};

export default Details;
