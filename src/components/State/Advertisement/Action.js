
import { CREATE_AN_ADVERTISEMENT_FAILURE, CREATE_AN_ADVERTISEMENT_REQUEST, CREATE_AN_ADVERTISEMENT_SUCCESS, CREATE_CATEGORY_FAILURE, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, DELETE_ADVERTISEMENT_FAILURE, DELETE_ADVERTISEMENT_REQUEST, DELETE_ADVERTISEMENT_SUCCESS, GET_ADVERTISEMENT_BY_ID_FAILURE, GET_ADVERTISEMENT_BY_ID_REQUEST, GET_ADVERTISEMENT_BY_ID_SUCCESS, GET_ADVERTISEMENT_BY_USER_ID_FAILURE, GET_ADVERTISEMENT_BY_USER_ID_REQUEST, GET_ADVERTISEMENT_BY_USER_ID_SUCCESS, GET_ALL_ADVERTISEMENT_FAILURE, GET_ALL_ADVERTISEMENT_REQUEST, GET_ALL_ADVERTISEMENT_SUCCESS, UPDATE_ADVERTISEMENT_FAILURE, UPDATE_ADVERTISEMENT_REQUEST, UPDATE_ADVERTISEMENT_STATUS_FAILURE, UPDATE_ADVERTISEMENT_STATUS_REQUEST, UPDATE_ADVERTISEMENT_STATUS_SUCCESS, UPDATE_ADVERTISEMENT_SUCCESS } from "./ActionType"
import { api } from "../../Config/api";


//get all advertisements

export const getAllAdvertisement = (token) => {
    return async (dispatch) => {
        dispatch({type:GET_ALL_ADVERTISEMENT_REQUEST});
        try{
            const {data} = await api.get(`/api/advertisement/AllAdds`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch({type:GET_ALL_ADVERTISEMENT_SUCCESS, payload:data});
            console.log("all adds", data);
        }
        catch(error){
            dispatch({type:GET_ALL_ADVERTISEMENT_FAILURE, payload:error});
            console.log("error to get adds", error);
        }
    }
}

//get adds by user id
export const getAdvertisementByUserId = (jwt) => {
    return async (dispatch) => {
        dispatch({type:GET_ADVERTISEMENT_BY_USER_ID_REQUEST});
        try{
            const {data} = await api.get(`/api/admin/advertisement/userAdvertisement`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:GET_ADVERTISEMENT_BY_USER_ID_SUCCESS, payload:data});

        }
        catch(error){
            dispatch({type:GET_ADVERTISEMENT_BY_USER_ID_FAILURE, payload:error});
        }
    }
}


//create add
export const createAdvertisement = (reqData) => {
    return async (dispatch) => {
        dispatch({type:CREATE_AN_ADVERTISEMENT_REQUEST});
        try{
            const {data} = await api.post(`/api/advertisement/createAdd`, reqData.data,  {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });
            dispatch({type:CREATE_AN_ADVERTISEMENT_SUCCESS, payload:data});
            console.log("post add success", data);
        }
        catch(error){
            dispatch({type:CREATE_AN_ADVERTISEMENT_FAILURE, payload:error});
            console.log("error to create adds", error);
        }
    }
}

//create category
export const createCategory = (reqData) => {
    return async (dispatch) => {
        dispatch({type:CREATE_CATEGORY_REQUEST});
        try{
            const res = await api.post(`/api/category/createCategory`,reqData, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });
            dispatch({type:CREATE_CATEGORY_SUCCESS, payload:res});
            console.log("category created success", res);
        }
        catch(error){
            dispatch({type:CREATE_CATEGORY_FAILURE, error});
            console.log("error to create category",error);
        }
    }
}

//update adds
export const updateAdvertisement = (advertisementId, advertisementData, jwt) => {
    return async (dispatch) => {
        dispatch({type:UPDATE_ADVERTISEMENT_REQUEST});
        try{
            const response = await api.put(`/api/admin/advertisement/${advertisementId}`, advertisementData, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:UPDATE_ADVERTISEMENT_SUCCESS, payload:response.data});
            console.log("adds update success", response.data);
        }
        catch(error){
            dispatch({type:UPDATE_ADVERTISEMENT_FAILURE, payload:error});
            console.log("error to update adds", error);
        }
    }
}

//delete adds
export const deleteAdvertisement = (advertisementId, jwt) => {
    return async (dispatch) => {
        dispatch({type:DELETE_ADVERTISEMENT_REQUEST});
        try{
            const response = await api.delete(`/api/advertisement/${advertisementId}/deleteAdd`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:DELETE_ADVERTISEMENT_SUCCESS, payload:response.data});
            console.log("add deleted successfully", response.data);
        }
        catch(error){
            dispatch({type:DELETE_ADVERTISEMENT_FAILURE, payload:error});
            console.log("error to delete adds", error);
        }
    }
}


//update adds availability
export const updateAdvertisementAvailability = (advertisementId, advertisementData, jwt) => {
    return async (dispatch) => {
        dispatch({type:UPDATE_ADVERTISEMENT_STATUS_REQUEST});
        try{
            const response = await api.put(`/api/admin/advertisement/${advertisementId}/status`, advertisementData, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:UPDATE_ADVERTISEMENT_STATUS_SUCCESS, payload:response.data});
            console.log("adds availability success", response.data);
        }
        catch(error){
            dispatch({type:UPDATE_ADVERTISEMENT_STATUS_FAILURE, payload:error});
            console.log("error to update availability", error);
        }
    }
}

//get adds by id
export const getAdvertisementById = (reqData) => {
    return async (dispatch) => {
        dispatch({type:GET_ADVERTISEMENT_BY_ID_REQUEST});
        try{
            const res = await api.get(`/api/advertisement/${reqData.advertisementId}`,  {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });
            dispatch({type:GET_ADVERTISEMENT_BY_ID_SUCCESS, payload:res.data});
            console.log("success getting ads by id", res.data);
        }
        catch(error){
            dispatch({type:GET_ADVERTISEMENT_BY_ID_FAILURE, payload:error});
            console.log("error to get add by id", error);
        }
    }
}