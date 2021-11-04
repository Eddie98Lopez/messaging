import React from "react";
import { DetailsRoute, MessageList } from "..";
import { MainWrapper } from "../styled-components";
import { useParams } from "react-router";
import { useStore } from "../../utils";
import { Switch, Route } from "react-router-dom";

const FolderRoute = (props) => {
  const { folder } = useParams();
  const { folders } = useStore().store;

  return (
    <MainWrapper>
      <MessageList folder={folder} folders={folders} />

      <Switch>
        <Route exact path={`/dash/folder/:folder/:id`}>
          <DetailsRoute />
        </Route>
      </Switch>
    </MainWrapper>
  );
};

export default FolderRoute;
