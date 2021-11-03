import { axiosWithAuth } from ".";

/*This function makes a "delete" call to the server and if the operation is
successful it updates local state by removing said message from both the inbox 
and sent folders through a dispatch function that feeds an action to a reducer.
*/

export const deleteMessage = (dispatch,id) => {

    axiosWithAuth()
    .delete(`https://messaging-test.bixly.com/messages/${id}`)
    .then(res => {
      const action= {type:'DELETE_MESSAGE', payload:id}
      dispatch(action)

    })
    .catch(err=>console.log(err))
  } 