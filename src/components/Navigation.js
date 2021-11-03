import React, {useState,useEffect} from 'react'
import {NavLink, useHistory, useLocation } from 'react-router-dom'
import { NavLinks, Nav, Icon, Button } from './styled-components'
import {hamburger,inbox,logoutIcon,compose,sent, Logo} from '../design-assets'




const Navigation = (props) => {
    const {url} = props
    const {push} = useHistory()
    const location = useLocation()



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

                <Logo  fill='white'/>

                <div className='hamburger svg' onClick={()=> setDisplay(!display)}>
                    <Icon img={hamburger} alt='hamburger' />
                </div>

            </div>

            <NavLinks mobile={display}>
                <div className='top'>
                    <Button className='disappear' onClick={()=>push(`${url}/compose`)} width='80%'>
                        <Icon img={compose} alt='new-message-icon'/>
                        <span className='navWords'>Compose</span>
    
                        
                    </Button>

                    <div className='divider navWords disappear'></div>

                    <NavLink activeClassName='active' className = 'link' to = {`${url}/inbox`}>
                        <Icon img={inbox} alt='inbox-icon'/>
                        <span className='navWords'>Inbox</span>
                        
                    </NavLink>

                    <NavLink activeClassName='active' className = 'link' to = {`${url}/sent`}>
                        <Icon img={sent} alt='sent-icon'/>
                        <span className='navWords'>Sent</span>
                        
                    </NavLink>
                </div>


                <div onClick={logout} className='link logout'>
                    <Icon img={logoutIcon} alt='logout'/>
                    <span className='navWords'>Logout</span>
                </div>

            </NavLinks>


        </Nav>
    )}

export default Navigation