//import axios from "axios";
import { axiosWithAuth } from "./axiosWithAuth";
import React, { createContext, useState, useEffect } from "react";

export const MessagesContext = createContext();

export const MessagesProvider = (props) => {
  const [messages, setMessages] = useState({ inbox: [], sent: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const inbox = await axiosWithAuth().get(
          "https://messaging-test.bixly.com/messages"
        );
        const sent = await axiosWithAuth().get(
          "https://messaging-test.bixly.com/messages/sent"
        );
        console.log(inbox);
        console.log(sent);

        setMessages({
          inbox: inbox.data,
          sent: sent.data,
        });
      } catch {
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
