import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { APIs } from '../../../shared';

// Создаем асинхронный Thunk для получения регионов
export const fetchRegions = createAsyncThunk(
  'regions/fetchRegions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await APIs.region.getRegions();
      return response.data.regions;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  regions: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const regionSlice = createSlice({
  name: 'regions',
  initialState,
  reducers: {
    // Здесь могут быть синхронные редьюсеры, если они нужны
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRegions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.regions = action.payload;
      })
      .addCase(fetchRegions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default regionSlice.reducer;

// Селекторы
export const selectAllRegions = (state) => state.region.regions;
export const selectRegionsStatus = (state) => state.region.status;
export const selectRegionsError = (state) => state.region.error;