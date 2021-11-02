import React from "react";
import { deleteIcon, reply } from "../design-assets";
import { Icon, DetailsWrapper } from "./styled-components";
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
      <div>
        <Icon alt="go back" onClick={goBack} />
        <Icon img={reply} alt="reply" onClick={() => push("/dash/compose")} />
        <Icon img={deleteIcon} alt="delete" />
      </div>

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
