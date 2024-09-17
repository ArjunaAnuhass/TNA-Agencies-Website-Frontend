import axios from "axios";

export const API_URL = "http://localhost:8080";

export const API_URL_1 = "http://127.0.0.1:5000";

export const api=axios.create({
    baseURL:API_URL,
    headers: {
        "Content-Type":"application/json"
    }
})

export const api1 = axios.create({
    baseURL: API_URL_1,
    headers: {
        "Content-Type":"multipart/form-data"
    }
})