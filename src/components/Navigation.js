import React from 'react'
import {NavLink, useHistory} from 'react-router-dom'
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

        & .icon{
            height:inherit;
            display:inline;
            margin-right:1rem;

            & img{
                width:auto;
                height:100%;

            }
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
                        <div className = 'icon'>
                            <img src={compose} alt='new-message-icon'/>
                        </div>
                        <span>Compose</span>
                    </NavLink>

                    <hr/>

                    <NavLink className = 'link'to = {`${url}/inbox`}>
                        <div className = 'icon'>
                            <img src={inbox} alt='inbox-icon'/>
                        </div>
                        <span>Inbox</span>
                    </NavLink>

                    <NavLink className = 'link'to = {`${url}/sent`}>
                        <div className = 'icon'>
                            <img src={sent} alt='sent-icon'/>
                        </div>
                        <span>Sent</span>
                    </NavLink>
                </div>

                <div onClick={logout} className='link'>
                    <div className = 'icon'>
                        <img src={logoutIcon} alt='logout-icon'/>
                    </div>
                    <span>Logout</span>
                </div>

            </div>


        </Nav>
    )}

export default Navigation