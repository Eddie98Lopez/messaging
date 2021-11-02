import React from "react";
import { deleteIcon, reply, backIcon } from "../design-assets";
import { Icon, DetailsWrapper,Button,DetailButtons } from "./styled-components";
import { useStore, deleteMessage} from "../utils";
import { useHistory } from "react-router";

const Details = (props) => {
  const { folder, message } = props;
  const { title, body, sender, receiver, id,sent } = message;
  const date = new Date(sent)
  const [messages, setMessages] = useStore();
  const { push, goBack } = useHistory();



  const deleteAndGoBack = () => {
    deleteMessage([messages, setMessages], id);
    push(`/dash/${folder}`);
  };

  return (
    <div>
      <DetailButtons>
        <div><Button onClick={()=>goBack()}><Icon  img={backIcon} alt="go back" /></Button></div>       
        <div>
        <Button onClick={()=>push('/dash/compose')}><Icon img={reply} alt="reply"/></Button>
        <Button onClick={deleteAndGoBack}><Icon img={deleteIcon} alt="delete" /></Button>
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
