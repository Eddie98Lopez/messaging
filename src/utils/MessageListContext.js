import React, { createContext, useState, useEffect } from "react";

export const MessagesContext = createContext()

export const MessagesProvider = (props) => {

    const [messages,setMessages] = useState({
        inbox:[
            {
              title: "Where to go from here?",
              body: "boop boop boop",
              sender: "Richard",
              id: 1,
            },
            { title: "boop", body: "boop boop boop", sender: "Booper", id: 2 },
          ],
        sent:[
            {
              title: "I have an idea?",
              body: "boop boop boop",
              receiver: "Richard",
              id: 1,
            },
            { title: "boop", body: "boop boop boop", receiver: "Booper", id: 2 },
          ]
    })

    //useEffect(()=>{},[])


    return(
        <MessagesContext.Provider value={[messages,setMessages]}>
            {props.children}
        </MessagesContext.Provider>
        
    )
}