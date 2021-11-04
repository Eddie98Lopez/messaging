import React from 'react'
import MessageItem from "./MessageItem";

const MessageList = (props) => {
const {folders,folder} = props
  
    return(
        <div >
        {folders[`${folder}`].length === 0
        ? `${folder} is empty`
        :folders[`${folder}`].map(item => <MessageItem key={item.id} message={item}/>)
        }
      </div>
    )
}

export default MessageList