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

export const payments = createAsyncThunk(
  '/payments/payments',
  async (params) => {
    try {
      const { data } = await axios.post('/payments/payment', params);

      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const changeOrder = createAsyncThunk(
  '/orders/changeOrder',
  async (params) => {
    try {
      const { data } = await axios.post('/orders/changeOrder', params);

      return data;
    } catch (error) {
      console.log(error);
    }
  },
);
