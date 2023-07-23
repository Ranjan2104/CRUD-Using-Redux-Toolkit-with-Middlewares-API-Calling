import { createSlice } from "@reduxjs/toolkit";
import { getAllUserData } from "./Middlewares/getAllData";
import { createUser } from "./Middlewares/createUser";
import { updateUserData } from "./Middlewares/updateUser";
import { deleteUserData } from "./Middlewares/deleteUser";

export const userDetails = createSlice({
    name: 'userDetails',
    initialState: {
        data: [],
        loading: false,
        error: null,
        searchValue: []
    },
    reducers: {
        serachFliter: (state, action) => {
            state.searchValue = action.payload
        }
    },
    extraReducers: {
        [getAllUserData.pending] : (state, action) => {
            state.loading = true;
        },
        [getAllUserData.fulfilled] : (state, action) => {
            state.loading = false;
            state.data = action.payload.data;
        },
        [getAllUserData.rejected] : (state, action) => {
            state.loading = false;
            state.error = action.payload.message
        },
        [createUser.pending] : (state, action) => {
            state.loading = true;
        },
        [createUser.fulfilled] : (state, action) => {
            state.loading = false;
            state.data.push(action.payload.data);
        },
        [createUser.rejected] : (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message;
        },
        [updateUserData.pending] : (state, action) => {
            state.loading = true;
        },
        [updateUserData.fulfilled] : (state, action) => {
            state.loading = false;
            state.data = state.data.map((ele) => ele.id === action.payload.data.id ? action.payload.data : ele)
        },
        [updateUserData.rejected] : (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message;
        },
        [deleteUserData.pending] : (state, action) => {
            state.loading = true;
        },
        [deleteUserData.fulfilled] : (state, action) => {
            state.loading = false;
            if(action.payload.data.id) {
                state.data = state.data.filter((ele) => ele.id !== action.payload.data.id)
            }    
        },
        [deleteUserData.rejected] : (state, action) => {
            state.loading = false;
            state.error = action?.payload?.message;
        }
    }
})
export const { serachFliter } = userDetails.actions
export default userDetails.reducer;