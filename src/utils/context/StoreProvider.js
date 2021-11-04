import React, { createContext, useState, useEffect } from "react";
import { storeReducer } from "./reducer";
import { fetchMessages, getMsgsAction, getMsgsErr, newErrAction } from "..";
import { useLocation } from "react-router";

// MessageContext will act as a state store
export const StoreContext = createContext();

//Below is a custom provider component
export const StoreProvider = (props) => {
  const location = useLocation();
  const initialState = {
    folders: {
      inbox: [],
      sent: [],
    },
    reply: null,
    errors: false,
    err_message: "",
  };

  const [store, setStore] = useState(initialState);

  const dispatch = (action) => {
    setStore(storeReducer(store, action));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const folders = await fetchMessages();
        dispatch({ type: getMsgsAction, payload: folders });
      } catch {
        dispatch({ type: newErrAction, payload: getMsgsErr });
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "RESET_REPLY" });
  }, [location]);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};
