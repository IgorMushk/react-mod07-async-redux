import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from './operations';

const tasksInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

// const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState: tasksInitialState,
//   reducers: {
//     // Выполнится в момент старта HTTP-запроса
//     fetchingInProgress(state) {
//       state.isLoading = true;
//     },
//     // Выполнится если HTTP-запрос завершился успешно
//     fetchingSuccess(state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     // Выполнится если HTTP-запрос завершился с ошибкой
//     fetchingError(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   tasksSlice.actions;
// export const tasksReduser =
//   tasksSlice.reducer;

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  // Добавляем обработку внешних экшенов
  extraReducers: {
    [fetchTasks.panding](state, action) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const tasksReduser = tasksSlice.reducer;
