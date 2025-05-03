import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { APIs } from '../../../shared';

// Получение туров
export const fetchTours = createAsyncThunk(
  'tours/fetchTours',
  async (_, { rejectWithValue }) => {
    try {
      const response = await APIs.tour.getTours();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Удаление тура
export const deleteTour = createAsyncThunk(
  'tours/deleteTour',
  async (tourId, { rejectWithValue }) => {
    try {
      await APIs.tour.deleteTours(tourId);
      return tourId;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Создание нового тура
export const createTour = createAsyncThunk(
  'tours/createTour',
  async (tourData, { rejectWithValue }) => {
    try {
      const response = await APIs.tour.addTours(tourData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateTour = createAsyncThunk(
  'tours/updateTour',
  async ({ id, tourData }, { rejectWithValue }) => {
    try {
      console.log(tourData)
      const response = await APIs.tour.updateTours(id, tourData);
      return response.data;
    } catch (error) {
      // Извлекаем текст ошибки из response
      const errorMessage = error.response?.data?.message || error.message;
      return rejectWithValue(errorMessage); // Возвращаем строку, а не объект
    }
  }
);

const initialState = {
  tours: [],
  status: 'idle',
  error: null,
  currentTour: null, // Для хранения текущего редактируемого тура
};

const toursSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {
    // Синхронные действия
    setCurrentTour: (state, action) => {
      state.currentTour = action.payload;
    },
    clearCurrentTour: (state) => {
      state.currentTour = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Загрузка туров
      .addCase(fetchTours.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTours.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tours = action.payload;
      })
      .addCase(fetchTours.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // Удаление тура
      .addCase(deleteTour.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteTour.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tours = state.tours.filter(tour => tour.id !== action.payload);
      })
      .addCase(deleteTour.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // Создание тура
      .addCase(createTour.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createTour.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tours.push(action.payload);
      })
      .addCase(createTour.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
      // Обновление тура
      .addCase(updateTour.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateTour.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.tours.findIndex(tour => tour.id === action.payload.id);
        if (index !== -1) {
          state.tours[index] = action.payload;
        }
        state.currentTour = null;
      })
      .addCase(updateTour.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

// Экспорты
export const { setCurrentTour, clearCurrentTour } = toursSlice.actions;

export default toursSlice.reducer;

// Селекторы
export const selectAllTours = (state) => state.tours.tours;
export const selectToursStatus = (state) => state.tours.status;
export const selectToursError = (state) => state.tours.error;
export const selectCurrentTour = (state) => state.tours.currentTour;