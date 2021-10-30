import React from 'react'
import {Switch, Route, useRouteMatch} from 'react-router-dom'
import MessageFolder from './MessageFolder'
import Navigation from './Navigation'
import NewMessage from './NewMessage'
import MessageDetails from './MessageDetails'
import styled from 'styled-components'

const Wrapper = styled.div`
width:100%;
height: inherit;
display: grid;
grid-template-columns: 1fr 4fr;
grid-template-rows: 100%;

@media only screen and (max-width:600px){
    display:block;
}
`



const Dashboard = (props) => {

    const dummyData = [{
        title:"Where to go from here?",
        body:'boop boop boop',
        sender: "Richard",
        id:1
    }, 
        {title:"boop",
        body:'boop boop boop',
        sender: "Booper",
        id:2 }]

    const {path, url} = useRouteMatch()


    return (
    
    <Wrapper>

        <Navigation url ={url}/>

        <Switch>
            <Route exact path = {`${path}/compose`}>
                <NewMessage/>
            </Route>

            <Route exact path = {`${path}/:folder`}>
                <MessageFolder messages={dummyData}/>
            </Route>

            <Route exact path = {`${path}/:folder/:id`}>
                <MessageDetails messages={dummyData}/>
            </Route>

        </Switch>

    </Wrapper>
    )
}

export default Dashboard