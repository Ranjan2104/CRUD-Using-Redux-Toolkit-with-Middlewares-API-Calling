import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// delete user data
const base_url = process.env.REACT_APP_BASE_URL;
export const deleteUserData = createAsyncThunk("deleteData", async(data, {rejectWithValue}) => {
    try {
        const response = await axios.delete(`${base_url}/${data.id}`, data);
        return response;
    } catch (error) {
        rejectWithValue(error.message);
    }
})