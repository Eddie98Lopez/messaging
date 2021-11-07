import React from 'react'
import { useHistory } from 'react-router'
import { compose } from '../../design-assets'
import {Button, Icon} from '../styled-components'

const Compose = (props) => {

    const {push} = useHistory()

    return(
    <Button className='disappear' onClick={()=>push(`/dash/compose`)} width='80%'>
        <Icon img={compose} alt='new-message-icon'/>
        <span className='navWords'>Compose</span>
                  
    </Button>
    )
}

export default Compose