import React from "react";
import { Switch, Route, useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { Navigation, MessageFolder, NewMessage, MessageDetails } from ".";
import { MessagesProvider } from "../utils";
import { Button } from "./styled-components";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: inherit;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 100%;

  & .compose{
    display:none;
    z-index:3;
    position:absolute;
    bottom: 4%;
    right 6%;
  }

  @media only screen and (max-width: 600px) {
    display: block;

    & .compose{
      display: block;

    }
  }


`;

const Dashboard = (props) => {
  const { path, url } = useRouteMatch();
  const {pathname} = useLocation()
  
  
  const {push} = useHistory()

  return (
    <Wrapper>
      <Navigation url={url} />
      
      {pathname !== '/dash/compose' && (<div className='compose' onClick={()=>push('/dash/compose')}>
      <Button width='150px'>Compose</Button>
      </div>)}

      <Switch>
        <MessagesProvider>
          <Route exact path={`${path}/compose`}>
            <NewMessage/>
          </Route>

          <Route exact path={`${path}/:folder`}>
            <MessageFolder />
          </Route>

          <Route path={`${path}/:folder/:id`}>
            <MessageDetails />
          </Route>
        </MessagesProvider>
      </Switch>
    </Wrapper>
  );
};

export default Dashboard;
