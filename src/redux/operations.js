import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import {
//   fetchingError,
//   fetchingInProgress,
//   fetchingSuccess,
// } from './taskSlice';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

// export const fetchTasks = () => async dispatch => {
//   try {
//     // Индикатор загрузки
//     dispatch(fetchingInProgress());
//     // HTTP-запрос
//     const response = await axios.get('/tasks');
//     // Обработка данных
//     dispatch(fetchingSuccess(response.data));
//   } catch (error) {
//     // Обработка ошибки
//     dispatch(fetchingError(error.message));
//   }
// };

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  // Используем символ подчеркивания как имя первого параметра,
  // потому что в этой операции он нам не нужен
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');
      // При успешном запросе возвращаем промис с данными
      return response.data;
    } catch (error) {
      // При ошибке запроса возвращаем промис
      // который будет отклонен с текстом ошибки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
