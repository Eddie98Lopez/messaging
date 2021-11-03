export const storeReducer = (state,action) => {

    switch (action.type){
        case 'SET_CURRENT':
            return {...state,
            current: action.payload}
        case 'RESET_CURRENT':
            return {...state,
            current:null}
        case 'READ_MESSAGE': 
            const {folder, message} = action.payload
            return {...state,
                folders:{...state.folders,
                 [folder]:[...state.folders[`${folder}`]
                 .filter(item => item.id!=message.id),
                 {...message, read:true}],
                
        }}
        case 'GET_MESSAGES':
            return {...state,
            folders: action.payload}
        case 'DELETE_MESSAGE':
            return {...state,
            folders:{...state.folders,
                inbox: state.folders.inbox.filter(item => item.id != action.payload),
                sent: state.folders.sent.filter(item => item.id != action.payload)

            }}
        case 'REPLY':
            return {...state,
            reply:{...action.payload
            }
        }
        case 'RESET_REPLY':
            return{...state,reply:null}
            
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