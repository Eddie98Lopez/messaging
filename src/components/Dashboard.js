import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Navigation, FolderRoute, NewMessage } from ".";
import { StoreProvider } from "../utils";
import ErrorMessage from "./ErrorMessage";
import { DashWrapper } from "./styled-components";


const Dashboard = (props) => {
  const { path, url } = useRouteMatch();

  return (
    <DashWrapper>
      <StoreProvider>
        <ErrorMessage />
        <Navigation url={url} />

        <Switch>
          <Route path={`${path}/compose`}>
            <NewMessage />
          </Route>

          <Route path={`${path}/folder/:folder`}>
            <FolderRoute />
          </Route>
        </Switch>
      </StoreProvider>
    </DashWrapper>
  );
};

export default Dashboard;
