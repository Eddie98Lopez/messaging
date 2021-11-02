import React, { useContext } from 'react'
import { deleteIcon, reply } from "../design-assets";
import { Icon } from "./styled-components";
import { MessagesContext, deleteMessage} from "../utils";
import { useHistory } from 'react-router';

const Details = (props) => {
    const {folder, message} = props
    const {title,body, sender, receiver, id} = message
    const [messages,setMessages] = useContext(MessagesContext)
    const {push, goBack} = useHistory()
    console.log(props)

    const deleteAndGoBack = () => {
        deleteMessage([messages,setMessages],id)
        push(`/dash/${folder}`);
      };


    return(
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

      <div onClick={deleteAndGoBack}>
        <Icon img={deleteIcon} alt="delete" />
      </div>
        </div>
    )
}

export default Details