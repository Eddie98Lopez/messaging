import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: left;
background: grey;
padding:2rem;

& .navlinks{
    height:100%;
    display:flex;
    flex-direction:column;
    
   
    & a{
        text-decoration:none;
        padding:1rem;
        background:purple;
        margin:.5rem;
        width:100%;
    }
}

`

const Navigation = (props) => {
    const {url} = props
    const {push} = useHistory()
    const logout = e => {
        localStorage.removeItem('token')
        console.log(localStorage)
        push('/')
        
    }

    return <Nav>

        <div>

            Logo

        </div>


        <div className='navlinks'>
            <Link to = {`${url}/compose`}>Compose</Link>
            <Link to = {`${url}/inbox`}>Inbox</Link>
            <Link to = {`${url}/sent`}>Sent</Link>
            <div onClick={logout}>Logout</div>
        </div>


    </Nav>
}

export default Navigation