import React from "react";
import Details from "../Details";
import { useStore } from "../../utils";
import { useParams } from "react-router-dom";
import { DetailRouteWrapper } from "../styled-components";

const DetailsRoute = (props) => {
  const { folder, id } = useParams();
  const { folders } = useStore().store;

  const details = folders[`${folder}`].filter((item) => item.id == id)[0];

  return (
    <DetailRouteWrapper>
      {details === undefined 
      ? "Select One" 
      : <Details message={details} />}
    </DetailRouteWrapper>
  );
};

export default DetailsRoute;
