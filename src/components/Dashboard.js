import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Navigation, MessageFolder, NewMessage, MessageDetails } from ".";
import { MessagesProvider } from "../utils";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: inherit;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 100%;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

const Dashboard = (props) => {
  const { path, url } = useRouteMatch();

  return (
    <Wrapper>
      <Navigation url={url} />

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
