import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get all data of users
const base_url = process.env.REACT_APP_BASE_URL;
export const getAllUserData = createAsyncThunk("getUsersData", async(data, {rejectWithValue}) => {
    try {
        const response = await axios.get(base_url);
        return response;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})