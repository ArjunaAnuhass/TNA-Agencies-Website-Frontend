import { ADD_FEEDBACK_FAILURE, ADD_FEEDBACK_REQUEST, ADD_FEEDBACK_SUCCESS, DELETE_FEEDBACK_FAILURE, DELETE_FEEDBACK_REQUEST, DELETE_FEEDBACK_SUCCESS, GET_ALL_FEEDBACK_FAILURE, GET_ALL_FEEDBACK_REQUEST, GET_ALL_FEEDBACK_SUCCESS } from "./ActionType"


const initialState = {
    feedback:[],
    loading: false,
    error: null,

}


export const feedbackReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_FEEDBACK_REQUEST:
            case GET_ALL_FEEDBACK_REQUEST:
                case DELETE_FEEDBACK_REQUEST:
                    return {
                        ...state,
                        loading: true,
                        error:null
                    }
        
        case ADD_FEEDBACK_SUCCESS:
            return {
                ...state,
                loading:false,
                error:null,
                feedback: action.payload
            }

        case GET_ALL_FEEDBACK_SUCCESS:
            return {
                ...state,
                loading: false,
                error:null,
                feedback:action.payload
            }

        case DELETE_FEEDBACK_SUCCESS:
            return {
                ...state,
                loading:true,
                error:null,
                feedback: state.feedback.filter((item) => item.id !== action.payload)
            }

        case ADD_FEEDBACK_FAILURE:
            case GET_ALL_FEEDBACK_FAILURE:
                case DELETE_FEEDBACK_FAILURE:
                    return {
                        ...state,
                        loading:false,
                        error:action.payload
                    }

        default:
            return state;

        
    }
}

export default feedbackReducer;