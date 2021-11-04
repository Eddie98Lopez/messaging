import React from 'react'
import { useHistory } from 'react-router'
import { Logo } from '../../design-assets'
import {Button, HomeWrapper} from '../styled-components'

const HomeRoute = (props) => {
    const {push} = useHistory()
    return(
        <HomeWrapper>
            <div className='logo'> 
                <Logo fill='white'/>
            </div>
            <div>  
                <Button onClick={()=>{push('/login')}}>
                    Login
                </Button>.
            </div>
        </HomeWrapper>
    )
}

export default HomeRoute