import { api } from "../../Config/api";
import { ADD_FEEDBACK_FAILURE, ADD_FEEDBACK_REQUEST, ADD_FEEDBACK_SUCCESS, DELETE_FEEDBACK_FAILURE, DELETE_FEEDBACK_REQUEST, DELETE_FEEDBACK_SUCCESS, GET_ALL_FEEDBACK_FAILURE, GET_ALL_FEEDBACK_REQUEST, GET_ALL_FEEDBACK_SUCCESS } from "./ActionType"



//add feedback
export const addFeedback = (reqData) => {
    return async (disptach) => {
        disptach({type:ADD_FEEDBACK_REQUEST});

        try{
            const {data} = await api.post(`/api/feedback/postFeedback`, reqData.data, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });
            disptach({type:ADD_FEEDBACK_SUCCESS, payload:data});
            console.log("add feedback success", data)
        }
        catch(error){
            disptach({type:ADD_FEEDBACK_FAILURE, payload:error});
            console.log("roor to add feedback", error);
        }
    }
}

//get all feedbacks
export const getAllFeedbacks = (token) => {
    return async (dispatch) => {
        dispatch({type:GET_ALL_FEEDBACK_REQUEST});

        try{
            const {data} = await api.get(`/api/feedback/getAllFeedbacks`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch({type:GET_ALL_FEEDBACK_SUCCESS, payload:data});
            console.log("get all feedback success", data);
        }
        catch(error){
            dispatch({type:GET_ALL_FEEDBACK_FAILURE, payload:error});
            console.log("error to get feedbacks", error);
        }
    }
}


//delete feedback
export const deleteFeedback = (feedbackId, jwt) => {
    return async (dispatch) => {
        dispatch({type:DELETE_FEEDBACK_REQUEST});
        
        try{
            const res = await api.delete(`/api/admin/feedback/${feedbackId}/deleteFeedback`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({type:DELETE_FEEDBACK_SUCCESS, payload:res.data});
            console.log("feedback deleted success", res.data);
        }
        catch(error){
            dispatch({type:DELETE_FEEDBACK_FAILURE, payload:error});
            console.log("error to delete feedback", error);
        }
    }
}