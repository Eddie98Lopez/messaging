import React from 'react'
import MessageItem from "./MessageItem";
import EmptyFolder from './EmptyFolder';

const MessageList = (props) => {
const {folders,folder} = props
  
    return(
        <div className='folder'>
        {folders[`${folder}`].length === 0
        ? <EmptyFolder folder={folder}/>
        :folders[`${folder}`].map(item => <MessageItem key={item.id} message={item}/>)
        }
      </div>
    )
}

export default MessageList