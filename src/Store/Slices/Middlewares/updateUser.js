import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// update user data
const base_url = process.env.REACT_APP_BASE_URL;
export const updateUserData = createAsyncThunk("updateData", async(data, {rejectWithValue}) => {
    try {
        const response = await axios.put(`${base_url}/${data.id}`, data);
        return response;
    } catch (error) {
        rejectWithValue(error.message);
    }
})