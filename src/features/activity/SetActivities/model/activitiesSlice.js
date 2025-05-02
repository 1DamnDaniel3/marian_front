import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIs } from "../../../../shared";

export const fetchActivities = createAsyncThunk( 
    'activities/fetchActivities',
    async (region_id, thunkAPI) => {
        try {
            const response = await APIs.activity.RegionActivities(region_id);
            return response.data.regionActivities;
        } catch (error) {
            console.error("Error fetching activities:", error); // Debugging
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const initialState = {
    list: [],
    loading: false,
    error: null,
};

const activitiesSlice = createSlice({
    name: 'activities',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchActivities.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchActivities.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchActivities.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default activitiesSlice.reducer;
