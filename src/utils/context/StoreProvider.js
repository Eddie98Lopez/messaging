import React, { createContext, useState, useEffect } from "react";
import { storeReducer } from "./reducer";
import { fetchMessages , getMsgsAction, getMsgsErr} from "..";

// MessageContext will act as a state store
export const StoreContext = createContext();


//Below is a custom provider component
export const StoreProvider = (props) => {
  const initialState = {
    current:null,
    folders: {
      inbox: [],
      sent: [],
    },
    reply: {
      receiver: "",
      title: "",
    },
    errors: false,
    err_message: ''
  };

  const [store, setStore] = useState(initialState);

  const dispatch = (action) => {
    setStore(storeReducer(store, action));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const folders = await fetchMessages();
        dispatch({ type: "GET_MESSAGES", payload: folders });
      } catch {
        dispatch({type:getMsgsAction, payload:getMsgsErr})
      }
    };

    fetchData();
  }, []);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};
