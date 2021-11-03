import React from "react";
import { DetailsRoute } from ".";
import { MainWrapper } from "./styled-components";
import MessageThumb from "./MessageThumb";
import { useParams, Switch, Route } from "react-router-dom";
import { useStore } from "../utils";

const FolderRoute = (props) => {
  const { folder } = useParams();
  const {folders} = useStore().store;


  return (
    <MainWrapper>
      <div>
        {
          folders[`${folder}`].map(item => <MessageThumb message={item}/>)
        }

      </div>

        
<Switch>
  <Route exact path={`/dash/folder/:folder/:id`}>
    <DetailsRoute/>
  </Route>
</Switch>
    </MainWrapper>
  );
};

export default FolderRoute;
