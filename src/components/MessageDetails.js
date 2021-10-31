import React, { useContext } from 'react'
import { useParams, useHistory }from 'react-router-dom'
import {Icon} from './styled-components'
import { MessagesContext } from '../utils/MessageListContext'
import { deleteIcon,reply } from '../design-assets'


const MessageDetails = (props) => {
const{folder, id} = useParams()
const {push,goBack} = useHistory()

const [messages,setMessage] = useContext(MessagesContext)
const details = messages[`${folder}`].filter(item => item.id == id)[0]
const {title, body, sender, receiver} = details

const deleteMessage = () => {
    console.log(messages)
    setMessage({
        ...messages,
        [folder]:messages[`${folder}`].filter(item=> item !== details)})

    push(`/dash/${folder}`)
}

//const [details,setDetails] = useState({})


    return <div>

        <div>
            <Icon alt='go back' onClick={goBack}/>
            <Icon img={reply} alt = 'reply' onClick={()=>push('/dash/compose')}/>
        </div>

        <div>
        <h2>{title}</h2>
        <h4>{folder === 'sent' ? `to: ${receiver}` : `from: ${sender}`}</h4>
        <p>{body}</p>
        </div>

        <div onClick={deleteMessage}>
            <Icon 
             img={deleteIcon}
             alt='delete'/>
        </div>

    </div>
}

export default MessageDetails