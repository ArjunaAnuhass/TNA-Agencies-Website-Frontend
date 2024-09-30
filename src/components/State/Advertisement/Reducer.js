import { CREATE_AN_ADVERTISEMENT_FAILURE, CREATE_AN_ADVERTISEMENT_REQUEST, CREATE_AN_ADVERTISEMENT_SUCCESS, CREATE_CATEGORY_FAILURE, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, DELETE_ADVERTISEMENT_FAILURE, DELETE_ADVERTISEMENT_REQUEST, DELETE_ADVERTISEMENT_SUCCESS, GET_ADVERTISEMENT_BY_ID_FAILURE, GET_ADVERTISEMENT_BY_ID_REQUEST, GET_ADVERTISEMENT_BY_ID_SUCCESS, GET_ADVERTISEMENT_BY_USER_ID_REQUEST, GET_ADVERTISEMENT_BY_USER_ID_SUCCESS, GET_ALL_ADVERTISEMENT_FAILURE, GET_ALL_ADVERTISEMENT_REQUEST, GET_ALL_ADVERTISEMENT_SUCCESS, UPDATE_ADVERTISEMENT_FAILURE, UPDATE_ADVERTISEMENT_REQUEST, UPDATE_ADVERTISEMENT_STATUS_FAILURE, UPDATE_ADVERTISEMENT_STATUS_REQUEST, UPDATE_ADVERTISEMENT_STATUS_SUCCESS, UPDATE_ADVERTISEMENT_SUCCESS } from "./ActionType"

const initialState = {
    advertisements: [],
    userAdvertisement: null,
    advertisement: [],
    loading: false,
    error: null,
    districtCategory:null,

}


export const advertisementReducer = (state = initialState, action) => {

    switch(action.type) {
        case CREATE_AN_ADVERTISEMENT_REQUEST:
            case GET_ALL_ADVERTISEMENT_REQUEST:
                case DELETE_ADVERTISEMENT_REQUEST:
                    case UPDATE_ADVERTISEMENT_REQUEST:
                        case GET_ADVERTISEMENT_BY_USER_ID_REQUEST:
                            case GET_ADVERTISEMENT_BY_ID_REQUEST:
                                case CREATE_CATEGORY_REQUEST:
                                    case UPDATE_ADVERTISEMENT_STATUS_REQUEST:
                            return {
                                ...state,
                                loading: true,
                                userAdvertisement: action.payload,
                            };

        case CREATE_AN_ADVERTISEMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                userAdvertisement: action.payload
            };

        case CREATE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                districtCategory: action.payload
            }

        case GET_ALL_ADVERTISEMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                advertisements: action.payload
            }
        
        case GET_ADVERTISEMENT_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                advertisement: action.payload,
                advertisements: action.payload
            }

        case GET_ADVERTISEMENT_BY_USER_ID_SUCCESS:
                case UPDATE_ADVERTISEMENT_SUCCESS:
                    return {
                        ...state,
                        loading: false,
                        userAdvertisement: action.payload,
                    };

        case DELETE_ADVERTISEMENT_SUCCESS:
            return {
                ...state,
                error: null,
                advertisements: state.advertisements.filter(ad => ad.id !== action.payload),
            };

        case UPDATE_ADVERTISEMENT_STATUS_SUCCESS:
            return {
                ...state,
                error: null,
                advertisements: state.advertisements.map(ad => ad.id === action.payload.id?{...ad, availability: action.payload.availability }: ad
                    
                )
            };

        case CREATE_AN_ADVERTISEMENT_FAILURE:
            case GET_ALL_ADVERTISEMENT_FAILURE:
                case DELETE_ADVERTISEMENT_FAILURE:
                    case UPDATE_ADVERTISEMENT_FAILURE:
                        case GET_ADVERTISEMENT_BY_ID_FAILURE:
                            case CREATE_CATEGORY_FAILURE:
                                case UPDATE_ADVERTISEMENT_STATUS_FAILURE:
                        return {
                            ...state,
                            loading: false,
                            error: action.payload,
                        };


        default:
            return state;


        
    }
}

export default advertisementReducer;