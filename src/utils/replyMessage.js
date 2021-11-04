import { replyMsgAction } from ".";


// this function updates the "reply" slice of state

export const replyMessage = (dispatch,message) => {
    const {title,sender} = message 
    dispatch({ type: replyMsgAction, payload: { title, receiver: sender }});
}