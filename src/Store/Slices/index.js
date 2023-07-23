import { combineReducers } from "@reduxjs/toolkit";
import userDetails from "./UserSlice";


const rootReducer = combineReducers({
    userDetails : userDetails
})

export default rootReducer