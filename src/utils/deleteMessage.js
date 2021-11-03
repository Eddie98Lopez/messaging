import { axiosWithAuth, delMsgAction, newErrAction, deleteErrMsg } from ".";

/*This function makes a "delete" call to the server and if the operation is
successful it updates local state by removing said message from both the inbox 
and sent folders through a dispatch function that feeds an action to a reducer.
*/

export const deleteMessage = (dispatch, id) => {
  axiosWithAuth()
    .delete(`https://messaging-test.bixly.com/messages/${id}`)
    .then((res) => {
      const action = { type: delMsgAction, payload: id };
      dispatch(action)
    })
    .catch((err) => {
      const action = {
        type: newErrAction,
        payload: deleteErrMsg,
      };
      dispatch(action);
    });
};
