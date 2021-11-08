import React, { createContext, useState, useEffect } from "react";
import { storeReducer } from "./reducer";
import { fetchMessages, resetReply } from "..";
import { useLocation } from "react-router";
import { initialState } from "./initialState";

// MessageContext will act as a state store
export const StoreContext = createContext();

//Below is a custom provider component
export const StoreProvider = (props) => {
  const location = useLocation();
  const [store, setStore] = useState(initialState);

  const dispatch = (action) => {
    setStore(storeReducer(store, action));
  };

  useEffect(() => {
    fetchMessages(dispatch);
  }, []);

  useEffect(() => {
    dispatch({ type: resetReply });
  }, [location]);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};
