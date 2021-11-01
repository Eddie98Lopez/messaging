import React from 'react'
import {Route, useHistory} from 'react-router-dom'

/*This function denies access to the dashboard component by 
redirecting the user to the login page if the auth-token
cannot be found in localStorage. */

export const PrivateRoute = ({component: Component, ...rest}) => {

    const {push} = useHistory()
    return(
        <Route {...rest} 
        
        render = {(props)=>{
            if(localStorage.getItem('token')){
                return <Component {...props}/>
            }
            else{
                push('/login')
            }
        }} 
        />
    )}