import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch, useHistory} from "react-router-dom";
import { Navigation, FolderRoute, NewMessage, DetailsRoute } from ".";
import { StoreProvider } from "../utils";
import ErrorMessage from "./ErrorMessage";
import { Button, DashWrapper,MainWrapper } from "./styled-components";

const fixedButton = `
width: 150px;
bottom: 4%;
right:6%;
`

const Dashboard = (props) => {
  const { path, url } = useRouteMatch();
  const {push} = useHistory()



  return (
    <DashWrapper>
      <StoreProvider>
      <ErrorMessage/>
      <Navigation url={url} />
      
        <Switch>
  
    <Route path={`${path}/compose`}>
            <NewMessage/>
          </Route>
   

 
 <Route exact path={`${path}/:folder`}>

<MainWrapper><FolderRoute />
<DetailsRoute/>
</MainWrapper>
</Route>
 

        </Switch>


      </StoreProvider>
    </DashWrapper>
  );
};

export default Dashboard;
