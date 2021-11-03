export const storeReducer = (state,action) => {

    switch (action.type){
        case 'SET_CURRENT':
            return {...state,
            current: action.payload,
            }
        case 'RESET_CURRENT':
            return {...state,
            current:null}

        case 'GET_MESSAGES':
            return {...state,
            folders: action.payload}
        case 'DELETE_MESSAGE':
            return {...state,
                current:null,
            folders:{...state.folders,
                inbox: state.folders.inbox.filter(item => item.id != action.payload),
                sent: state.folders.sent.filter(item => item.id != action.payload)

            }}
        case 'REPLY':
            return {...state,
            reply:{
                receiver: action.payload.receiver,
                title: action.payload.title
            }
        }
        case 'RESET_REPLY':
            return {...state,
            reply:null}
        case 'NEW_ERROR':
            return {...state,
            errors: true,
            err_message:action.payload}

        case 'CLOSE_ERROR':
            return{ ...state,
            errors: false,
            err_message: ''
            }
        default:
            return {...state}
    }




}