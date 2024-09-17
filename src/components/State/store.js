import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reducer";
import { thunk } from "redux-thunk";
import advertisementReducer from "./Advertisement/Reducer";
import predictHousePriceReducer from "./EstimatePrice/Reducer";
import feedbackReducer from "./Feedback/Reducer";



const rootReducer = combineReducers({
    auth: authReducer,
    advertisement: advertisementReducer,
    estimatePrice: predictHousePriceReducer,
    feedback: feedbackReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
