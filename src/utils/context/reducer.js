export const storeReducer = (state,action) => {

    switch (action.type){
        case 'READ_MESSAGE': 
            return {...state,
            folders:{...state.folders,
                inbox:[...state.folders.inbox.filter(item => item.id!=action.payload.id),{...action.payload, read:true}],
                sent:[...state.folders.sent.filter(item => item.id!=action.payload.id),{...action.payload, read:true}]
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
            reply:{...state.reply,
                receiver: action.payload.receiver,
                title: action.payload.title
            }
        }
        case 'NEW_ERROR':
            return {...state,
            errors: true}

        case 'CLOSE_ERROR':
            return{ ...state,
            errors: false
            }
        default:
            return {...state}
    }




}