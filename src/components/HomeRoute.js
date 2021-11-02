import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { Logo } from '../design-assets'
import {Button} from './styled-components'

const HomeWrapper = styled.div`
height:100vh;
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:#E57E31;


& button{
    margin-top:3rem;
}

@media only screen and (max-width:500px){
    & .logo{
        height:5rem;
    }
}
`



const HomeRoute = (props) => {
    const {push} = useHistory()
    return(
        <HomeWrapper>


               <div className='logo'> <Logo fill='white'/></div>
            
            <div>
                <Button onClick={()=>{push('/login')}}>Login</Button>.
            </div>


        </HomeWrapper>
    )
}

export default HomeRoute