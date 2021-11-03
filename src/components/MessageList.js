import React from 'react'

import MessageThumb from "./MessageThumb";

const MessageList = (props) => {
const {folders,folder} = props
  
    return(
        <div >
        {folders[`${folder}`].length === 0
        ? `${folder} is empty`
        :folders[`${folder}`].map(item => <MessageThumb key={item.id} message={item}/>)
        }
      </div>
    )
}

export default MessageList