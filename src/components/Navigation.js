import React from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { Icon } from './styled-components/Icon'
import styled from 'styled-components'
import inbox from '../design-assets/inbox.png'
import logoutIcon from '../design-assets/logout.svg'
import compose from '../design-assets/compose.svg'
import sent from '../design-assets/sent.png'


const Nav = styled.nav`
width: 100%;
height: 100%;
align-items: left;
background: #c2c2c2;
padding:2rem;

& .navlinks{
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:right;
    
    & .link{
        height:35px;
        width:100%;
        margin: .5rem auto;
        display:flex;
        align-items:center;
        text-decoration:none;
        color:black;
        cursor:pointer;

        }

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

    return (
        <Nav>

            <div>

                Logo

            </div>

            <div className='navlinks'>
                <div>
                    <NavLink className = 'link'to = {`${url}/compose`}>
                        <Icon img={compose} alt='new-message-icon'/>
                        <span>Compose</span>
                    </NavLink>

                    <hr/>

                    <NavLink className = 'link'to = {`${url}/inbox`}>
                        <Icon img={inbox} alt='inbox-icon'/>
                        <span>Inbox</span>
                    </NavLink>

                    <NavLink className = 'link'to = {`${url}/sent`}>
                        <Icon img={sent} alt='sent-icon'/>
                        <span>Sent</span>
                    </NavLink>
                </div>


                <div onClick={logout} className='link'>
                    <Icon img={logoutIcon} alt='logout'/>
                    <span>Logout</span>
                </div>

            </div>


        </Nav>
    )}

export default Navigation