import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// create new user
const base_url = process.env.REACT_APP_BASE_URL;
export const createUser = createAsyncThunk("createUser", async(data, {rejectWithValue}) => {
    try {
        const response = await axios.post(base_url, data);
        return response;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})