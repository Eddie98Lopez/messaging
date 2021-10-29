import React from 'react'
import {Switch, Route, useRouteMatch} from 'react-router-dom'
import MessageFolder from './MessageFolder'
import Navigation from './Navigation'
import NewMessage from './NewMessage'
import styled from 'styled-components'

const Wrapper = styled.div`
width:100%;
height: inherit;
display: grid;
grid-template-columns: 1fr 4fr;
grid-template-rows: 100%;
`

const Dashboard = (props) => {

    const {path, url} = useRouteMatch()


    return (
    
    <Wrapper>

        <Navigation url ={url}/>

        <Switch>
            <Route path = {`${path}/inbox`}>
                <MessageFolder/>
            </Route>

            <Route path = {`${path}/Compose`}>
                <NewMessage/>
            </Route>

            <Route path = {`${path}/sent`}>
                <MessageFolder/>
            </Route>
        </Switch>

    </Wrapper>
    )
}

export default Dashboard