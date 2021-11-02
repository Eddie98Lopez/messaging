import { axiosWithAuth } from ".";

/*This function makes a "delete" call to the server and if the operation is
successful it updates local state by removing said message from both the inbox 
and sent folders.
*/

export const deleteMessage = ([messages,setMessages], id) => {

    axiosWithAuth()
    .delete(`https://messaging-test.bixly.com/messages/${id}`)
    .then(res => {
        setMessages({
          inbox:messages.inbox.filter((message) => message.id != id),
          sent: messages.sent.filter((message) => message.id != id),
        });
        console.log(messages)

    })
    .catch(err=>console.log(err))
  } 