import { ESTIMATE_PRICE_FAILURE, ESTIMATE_PRICE_REQUEST, ESTIMATE_PRICE_SUCCESS } from "./ActionType"


const initialState = {
    estimated_price:null,
    loading:false,
    error:null
}

export const predictHousePriceReducer = (state=initialState, action) => {

    switch(action.type){
        case ESTIMATE_PRICE_REQUEST:
            return {
                ...state,
                loading:true,
                error:null,
            }

        case ESTIMATE_PRICE_SUCCESS:
            return {
                ...state,
                loading:false,
                estimated_price: action.payload
            }

        case ESTIMATE_PRICE_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.payload
            }

        default:
            return state;
    }
}

export default predictHousePriceReducer;