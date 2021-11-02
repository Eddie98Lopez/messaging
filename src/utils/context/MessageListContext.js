//import axios from "axios";
import { axiosWithAuth } from "../axiosWithAuth";
import React, { createContext, useState, useEffect, useContext } from "react";

// MessageContext will act as a state store
export const MessagesContext = createContext();

// below is a custom hook to access state store
export const useStore = () => useContext(MessagesContext)

//Below is a custom provider component
export const MessagesProvider = (props) => {

  const [messages, setMessages] = useState({ inbox: [], sent: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const inbox = await axiosWithAuth().get("https://messaging-test.bixly.com/messages");
        const sent = await axiosWithAuth().get("https://messaging-test.bixly.com/messages/sent");
        setMessages({
          inbox: inbox.data,
          sent: sent.data,
        });} 
      catch {
        console.log("something went wrong");
      }
    };

    fetchData();
  }, []);

  return (
    <MessagesContext.Provider value={[messages, setMessages]}>
      {props.children}
    </MessagesContext.Provider>
  );
};


