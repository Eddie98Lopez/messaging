import React from "react";
import { useParams } from "react-router-dom";
import Details from "./Details";
import { useStore } from "../utils";

const DetailsRoute = (props) => {
  const { folder, id } = useParams();

  const {folders} = useStore().store;
  const details = folders[`${folder}`].filter((item) => item.id == id)[0];

  return (
    <div>
      {details === undefined ? (
        "Loading..."
      ) : (
        <Details folder={folder} message={details} id={id} />
      )}
    </div>
  );
};

export default DetailsRoute;
