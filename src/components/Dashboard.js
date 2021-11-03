import React from "react";
import { Switch, Route, useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { Navigation, FolderRoute, NewMessage, DetailsRoute } from ".";
import { StoreProvider } from "../utils";
import { Button, DashWrapper } from "./styled-components";

const fixedButton = `
width: 150px;
bottom: 4%;
right:6%;
`

const Dashboard = (props) => {
  const { path, url } = useRouteMatch();
  const {pathname} = useLocation()
  const {push} = useHistory()

  return (
    <DashWrapper>
      <StoreProvider>
      <Navigation url={url} />
      
      {pathname !== '/dash/compose' && (
        <Button 
        fixed={fixedButton}
        onClick={()=>push('/dash/compose')}
        className='compose'> Compose </Button>
      )}

      <Switch>

          <Route exact path={`${path}/compose`}>
            <NewMessage/>
          </Route>

          <Route exact path={`${path}/:folder`}>
            <FolderRoute />
          </Route>

          <Route path={`${path}/:folder/:id`}>
            <DetailsRoute />
          </Route>
        
      </Switch>
      </StoreProvider>
    </DashWrapper>
  );
};

export default Dashboard;
