import React from "react";
import MessageThumb from "./MessageThumb";
import { useParams } from "react-router-dom";
import { useStore } from "../utils";

const FolderRoute = (props) => {
  const { folder } = useParams();
  console.log(useParams())
  const {folders} = useStore().store;
  console.log(folders)

  return (
    <div>
      {folder !== "compose" &&
        (folders[`${folder}`].length === 0
          ? `${folder} is empty`
          : folders[`${folder}`].map((message) => (
              <MessageThumb key={message.id} message={message} />
            )))}
    </div>
  );
};

export default FolderRoute;
