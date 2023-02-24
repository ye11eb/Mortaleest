import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';

export const createOrder = createAsyncThunk(
  '/orders/createOrder',
  async (params) => {
    try {
      const { data } = await axios.post('/orders/createOrder', params);

      return data;
    } catch (error) {
      console.log(error);
    }
  },
);
