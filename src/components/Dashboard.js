import React from 'react'
import {Switch, Route, useRouteMatch} from 'react-router-dom'
import MessageFolder from './MessageFolder'
import Navigation from './Navigation'
import NewMessage from './NewMessage'

const Dashboard = (props) => {

    const {path, url} = useRouteMatch()


    return <div>

        <Navigation url ={url}/>

        <Switch>
            <Route exact path = 'dash/' > </Route>
            <Route path = {`${path}/Compose`}>
                <NewMessage/>
            </Route>
            <Route path = {`${path}/inbox`}>
                <MessageFolder/>
            </Route>
            <Route path = {`${path}/sent`}>
                <MessageFolder/>
            </Route>
        </Switch>

    </div>
}

export default Dashboard