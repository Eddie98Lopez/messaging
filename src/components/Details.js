import React from "react";
import { DetailsWrapper } from "./styled-components";
import { DetailNav } from ".";

const Details = (props) => {
  const { title, body, sender, receiver,sent } = props.message;
  const date = new Date(sent)

  return (
    <div>
      <DetailNav message={props.message}/>

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
