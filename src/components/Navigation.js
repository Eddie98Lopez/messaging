import React, {useState,useEffect} from 'react'
import {NavLink, useHistory, useLocation } from 'react-router-dom'
import { NavLinks, Nav, Icon, Button } from './styled-components'
import {hamburger,inbox,logoutIcon,compose,sent, Logo} from '../design-assets'
import { useStore } from '../utils'




const Navigation = (props) => {
    const {url} = props
    const {push} = useHistory()
    const location = useLocation()
    const [messages] = useStore()

    const unRead = (folder) =>{
        const unread = messages[`${folder}`].filter(item => item.read === false)
        const valueToUse = unread.length !== 0 ? unread.length : ''
        return valueToUse
    }

    //the slice of state below is used for the mobile menu functionality
    const [display,setDisplay]=useState(false)

    //in mobile view the "useEffect" below closes the mobile menu when the route changes
    useEffect(()=>{
        setDisplay(false)
    },[location])

    const logout = e => {
        localStorage.removeItem('token')
        console.log(localStorage)
        push('/')   
    }

    return (
        <Nav>

            <div className='logo'>

                <Logo height={'3rem'} fill='white'/>

                <div className='hamburger svg' onClick={()=> setDisplay(!display)}>
                    <Icon img={hamburger} alt='hamburger' />
                </div>

            </div>

            <NavLinks mobile={display}>
                <div className='top'>
                    <Button className='disappear' onClick={()=>push(`${url}/compose`)} width='80%'>
                        <Icon img={compose} alt='new-message-icon'/>
                        <span>Compose</span>
                        
                        
                    </Button>

                    <div className='divider disappear'></div>

                    <NavLink activeClassName='active' className = 'link' to = {`${url}/inbox`}>
                        <Icon img={inbox} alt='inbox-icon'/>
                        <span>Inbox</span>
                        <span>{unRead('inbox')}</span>
                    </NavLink>

                    <NavLink activeClassName='active' className = 'link' to = {`${url}/sent`}>
                        <Icon img={sent} alt='sent-icon'/>
                        <span>Sent</span>
                        <span>{unRead('sent')}</span>
                    </NavLink>
                </div>


                <div onClick={logout} className='link logout'>
                    <Icon img={logoutIcon} alt='logout'/>
                    <span>Logout</span>
                </div>

            </NavLinks>


        </Nav>
    )}

export default Navigation