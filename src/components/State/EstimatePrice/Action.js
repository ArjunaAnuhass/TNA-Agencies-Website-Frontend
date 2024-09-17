import axios from "axios";
import { ESTIMATE_PRICE_FAILURE, ESTIMATE_PRICE_REQUEST, ESTIMATE_PRICE_SUCCESS } from "./ActionType"
import { api1 } from "../../Config/api";

export const estimatePricePost = (location, land_size, house_size, beds, baths) => {
    return async (dispatch) =>{
        dispatch({type:ESTIMATE_PRICE_REQUEST});

        const formData = new FormData();
        formData.append('city', location);
        formData.append('Land_size', land_size);
        formData.append('House_size', house_size);
        formData.append('Beds', beds);
        formData.append('Baths', baths);
        try{
            const response = await api1.post(`/predict_house_price`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            dispatch({type:ESTIMATE_PRICE_SUCCESS, payload:response.data.estimated_price});
            console.log("estimate success", response.data.estimated_price);
        }
        catch(error){
            dispatch({type:ESTIMATE_PRICE_FAILURE, payload:error});
            console.log("error to estimate price", error);
        }
    }
}