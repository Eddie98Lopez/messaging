import { axiosWithAuth } from "./axiosWithAuth";
import { newErrAction, getMsgsAction } from ".";
import { getMsgsErr } from ".";

/*This async function retrieves the inbox and sent messages from the api and
 updates the "folders" slice of state with what is returned*/

export const fetchMessages = async (dispatch) => {
  try {
    const inbox = await axiosWithAuth().get("https://messaging-test.bixly.com/messages");
    const sent = await axiosWithAuth().get("https://messaging-test.bixly.com/messages/sent");
    const folders =  {
      inbox: inbox.data,
      sent: sent.data,
    }
    
    dispatch({ type: getMsgsAction, payload: folders })
    
  } catch {
    dispatch({ type: newErrAction, payload: getMsgsErr })
    console.log("something went wrong");
  }
};
