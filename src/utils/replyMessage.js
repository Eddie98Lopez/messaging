export const replyMessage = (dispatch,message) => {
    const {title,sender} = message 
    dispatch({ type: "REPLY", payload: { title, receiver: sender }});
}