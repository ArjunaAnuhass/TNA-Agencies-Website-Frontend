
import axios from "axios"
import { api, API_URL } from "../../Config/api"
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_REQUEST, ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./ActionType"


export const registerUser = (reqData) => async(dispatch) => {
    dispatch({type:REGISTER_REQUEST})
    try{
       const {data} = await axios.post(`${API_URL}/auth/signup`, reqData.userData) ;

       if(data.jwt)localStorage.setItem("jwt", data.jwt);
       if(data.role==="ROLE_ADMIN"){
        reqData.navigate("/admin")
       }
       else{
        reqData.navigate("/");
       }
       dispatch({type:REGISTER_SUCCESS, payload:data.reqData})
       console.log("register success", reqData)
    }
    catch (error){
        dispatch({type:REGISTER_FAILURE, payload:error})
        console.log("error to register", error)
    }
}

//login

export const loginUser = (reqData) => {
    return async (dispatch) => {
    dispatch({type:LOGIN_REQUEST})
        try{
            const {data} = await axios.post(`${API_URL}/auth/signing`, reqData.userData);

            if(data.jwt)localStorage.setItem("jwt", data.jwt);
            if(data.role==="ROLE_ADMIN"){
                reqData.navigate("/admin")
            }
            else{
                reqData.navigate("/")
            }
            dispatch({type:LOGIN_SUCCESS, payload:data.jwt});
            console.log("login success", data);
        }
        catch(error){
            dispatch({type:LOGIN_FAILURE, payload:error})
            console.log("error to login", error);
        }
    }
}


//get users

export const getUser = (jwt) => async(dispatch) => {
    dispatch({type:GET_USER_REQUEST});
    try{
        const {data} = await api.get(`/api/users/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })

        dispatch({type:GET_USER_SUCCESS, payload:data});
        console.log("user profile", data);
    }
    catch(error){
        dispatch({type:GET_USER_FAILURE, payload:error});
        console.log("error to get users", error);
    }
}

//add to favorites

export const addToFavorite = ({jwt, advertisementId}) => async(dispatch) => {
    dispatch({type:ADD_TO_FAVORITE_REQUEST});
    try{
        const {data} = await api.put(`/api/advertisement/${advertisementId}/add-to-favorite`, {}, {
            headers:{
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({type:ADD_TO_FAVORITE_SUCCESS, payload:data});
        console.log("add to favorite success", data);
    }
    catch(error){
        dispatch({type:ADD_TO_FAVORITE_FAILURE, payload:error});
        console.log("error to add to favorite", error);
    }
}

//logout

export const logout = () => async(dispatch) => {
    
    try{
        localStorage.clear();
        dispatch({type:LOGOUT});
        console.log("logout success");
    }
    catch(error){
        console.log("error to logout", error);
    }
}