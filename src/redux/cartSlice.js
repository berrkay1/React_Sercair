import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchGetApi = createAsyncThunk('cart/fetchGetApi' , async () => {
    const res = await axios('https://landingpage.sercair.com/api/V1/device/all')
    return res.data.data
});



const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        status:'idle'
    },
    reducers:{

    },
    extraReducers:{
        [fetchGetApi.pending] : (state,action) => {
            state.status='loading'
        },
        [fetchGetApi.fulfilled] : (state,action) => {
            state.items=action.payload;
            state.status = 'succeeded'
        },
        [fetchGetApi.rejected] : (state,action) => {
            state.status='failed'
            state.error= action.error.message;
        },
    }
});

export default cartSlice.reducer;