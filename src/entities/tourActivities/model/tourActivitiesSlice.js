import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { APIs } from '../../../shared';

// Создаем асинхронный thunk для добавления связей тур-активность
export const addTourActivities = createAsyncThunk(
  'tourActivities/addTourActivities',
  async (tourActivitiesData, { rejectWithValue }) => {
    try {
      console.log(tourActivitiesData)
      const response = await APIs.tourActivity.addTourActivities(tourActivitiesData);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const updateTourActivities = createAsyncThunk(
  'tourActivities/updateTourActivities',
  async ({ tour_id, activitiesData }, { rejectWithValue }) => {
      try {
          const response = await APIs.tourActivity.updateTourActivities(
              tour_id, 
              activitiesData 
          );
          return { 
              tourId: tour_id, 
              updatedActivities: response.data 
          };
      } catch (error) {
          if (error.response?.data) {
              return rejectWithValue(error.response.data);
          }
          return rejectWithValue(error.message);
      }
  }
);


export const fetchTourActivities = createAsyncThunk(
  'tourActivities/fetchTourActivities',
  async (_, { rejectWithValue }) => {
    try {
      const response = await APIs.tourActivity.fetchTourActivities();
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);




const initialState = {
  entities: [],
  loading: 'idle',
  error: null,
};

const tourActivitiesSlice = createSlice({
  name: 'tourActivities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Обработчики для addTourActivities
      .addCase(addTourActivities.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(addTourActivities.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        // Проверяем, является ли payload массивом
        if (Array.isArray(action.payload)) {
          state.entities = [...state.entities, ...action.payload];
        } else {
          // Если пришел одиночный объект, добавляем его в массив
          state.entities = [...state.entities, action.payload];
        }
        state.error = null;
      })
      .addCase(addTourActivities.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload;
      })

      // Остальные обработчики остаются без изменений
      .addCase(fetchTourActivities.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchTourActivities.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.entities = Array.isArray(action.payload) ? action.payload : [action.payload];
        state.error = null;
      })
      .addCase(fetchTourActivities.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload;
      })
      .addCase(updateTourActivities.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(updateTourActivities.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        // Обновляем существующие элементы
        const updatedItems = Array.isArray(action.payload) ? action.payload : [action.payload];
        state.entities = state.entities.map(entity => {
          const updatedItem = updatedItems.find(item => item.id === entity.id);
          return updatedItem || entity;
        });
        state.error = null;
      })
      .addCase(updateTourActivities.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload;
      });
  },
});

// Экспортируем редьюсер
export default tourActivitiesSlice.reducer;

// Экспортируем селекторы
export const selectTourActivities = (state) => state.tourActivities.entities;
export const selectTourActivitiesLoading = (state) => state.tourActivities.loading;
export const selectTourActivitiesError = (state) => state.tourActivities.error;
export const selectTourActivityById = (state, id) =>
  state.tourActivities.entities.find(activity => activity.id === id);