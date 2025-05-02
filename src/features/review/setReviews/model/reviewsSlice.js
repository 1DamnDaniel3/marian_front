import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIs } from "../../../../shared";


export const fetchReviews = createAsyncThunk(
    'reviews/fetchReviews',
    async () => {
        try {
            const responce = await APIs.review.getAllReviews();
            return responce.data.reviews
        } catch (error) {
            return error.responce.data;
        }

    }
);

const initialState = {
    items: [],
    status: 'idle',
    isCreating: false,
}

const reviewsSLice = createSlice({
    name: 'reviews',
    initialState: initialState,
    reducers: {
        toggleCreating(state, action) {
            state.isCreating = !state.isCreating;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.status = 'successed';
                state.items = action.payload;
            })
            .addCase(fetchReviews.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export const { toggleCreating } = reviewsSLice.actions;
export default reviewsSLice.reducer;