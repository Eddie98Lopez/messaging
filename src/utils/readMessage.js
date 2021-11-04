import { readMsgAction } from "."

// This function updates the "read_message" slice of state


export const readMessage = (dispatch,folder,message) => {
    /*axiosWithAuth()
        .put(`url/${id}`)
        .then()
        .catch() */

    dispatch({type:readMsgAction, payload:{folder, message} })
}