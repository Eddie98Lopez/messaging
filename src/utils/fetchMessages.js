
import { axiosWithAuth } from "./axiosWithAuth";

//This async function retrieves the inbox and sent messages from the api



export const fetchMessages = async () => {
        
        try {
          const inbox = await axiosWithAuth().get("https://messaging-test.bixly.com/messages");
          const sent = await axiosWithAuth().get("https://messaging-test.bixly.com/messages/sent");
  
          return {
            inbox: inbox.data,
            sent: sent.data,
          }

        } 
        catch {
          console.log("something went wrong");
        }
      };



    