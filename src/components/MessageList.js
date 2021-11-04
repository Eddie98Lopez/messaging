import React from 'react'
import MessageItem from "./MessageItem";
import EmptyFolder from './EmptyFolder';

const MessageList = (props) => {
const {folders,folder} = props
const sorted=  folders[`${folder}`].sort((a, b) => Date.parse(a.sent) - Date.parse(b.sent))
  
    return(
        <div className='folder'>
        {folders[`${folder}`].length === 0
        ? <EmptyFolder folder={folder}/>
        : sorted.map(item => <MessageItem key={item.id} message={item}/>)
        }
      </div>
    )
}

export default MessageList