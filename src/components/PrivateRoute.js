import React from 'react'
import {Route, useHistory} from 'react-router-dom'

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
    )


}