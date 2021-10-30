import React from 'react'
import { useLocation, useHistory } from 'react-router'
import { Icon, Thumb } from './styled-components'
import {deleteIcon,reply} from '../design-assets'


const MessageThumb = (props) => {
    const {title,sender,id} = props.message
    const {pathname}=useLocation()
    const {push} = useHistory()   

    const detailLink = () => {
        push(`${pathname}/${id}`)
    }

    return <Thumb>

        <div className='messInfo' onClick={detailLink}>
            <p>{sender} | </p><h3>{title}</h3>
        </div>

         <div className='buttons'>
            <Icon img={reply} alt='reply' 
            height={'1.25rem'} 
            onClick={()=>push('/dash/compose')}/>

            <Icon img={deleteIcon} alt='delete' 
            height={'1.25rem'}/>
        </div> 

    </Thumb>
}

export default MessageThumb