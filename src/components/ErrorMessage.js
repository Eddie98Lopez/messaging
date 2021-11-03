import React from "react";
import { Button, ErrorWrapper } from "./styled-components";
import { useStore } from "../utils";

//This component displays an error modal when app state.errors === true

const ErrorMessage = (props) => {
  const { store, dispatch } = useStore();
  const { errors, err_message } = store;
  const action = {
    type: "CLOSE_ERROR",
  };

  return (
    <ErrorWrapper display={errors}>
      <div>
        <h3>{err_message}</h3>
        <Button 
        onClick={() => dispatch(action)}>
          Close
        </Button>
      </div>
    </ErrorWrapper>
  );
};

export default ErrorMessage;
