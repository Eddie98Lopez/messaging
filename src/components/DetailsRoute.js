import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Details from "./Details";
import { MessagesContext } from "../utils";





const DetailsRoute = (props) => {
  const { folder, id } = useParams();


  const [messages, setMessages] = useContext(MessagesContext);
  const details = messages[`${folder}`].filter(item => item.id == id)[0]
 




  return (
    <div>

      {details === undefined ? 'Loading...' : <Details folder={folder} message={details} id={id}/>}

    </div>
  );
};

export default DetailsRoute;
