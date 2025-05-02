import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIs } from "../../../shared";

export const submitCutomTour = createAsyncThunk(
    'customTours/submit',
    async (tourData, {rejectWithValue}) => {
        try{
            const response = await APIs.custom.createRequest(tourData)
            return response.data;
        }catch(error){
            return rejectWithValue(error.response.data);
        }
    }
)