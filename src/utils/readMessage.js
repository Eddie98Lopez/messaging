import { readMsgAction } from "."


export const readMessage = (dispatch,folder,message) => {
    /*axiosWithAuth()
        .put(`url/${id}`)
        .then()
        .catch() */

    dispatch({type:readMsgAction, payload:{folder, message} })
}