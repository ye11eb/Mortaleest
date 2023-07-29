import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';

const initialState = {
  manufactures: [],
  loading: false,
  message: '',
};

export const changeManufacture = createAsyncThunk(
  'manufactures/changeManufacture',
  async (params) => {
    try {
      const { data } = await axios.post(
        '/manufactures/changeManufacture',
        params,
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const createManufacture = createAsyncThunk(
  'manufactures/createManufacture',
  async (params) => {
    try {
      const { data } = await axios.post(
        '/manufactures/createManufacture',
        params,
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const getAllManufactures = createAsyncThunk(
  'manufactures/getAllManufactures',
  async () => {
    try {
      const { data } = await axios.get(
        '/manufactures/getAllManufactures',
      );
      return data;
    } catch (error) {
      console.log(`something went wrong: ${error}`);
    }
  },
);

export const deleteManufacture = createAsyncThunk(
  'manufactures/deleteManufacture',
  async (params) => {
    try {
      const { data } = await axios.post(
        '/manufactures/deleteManufacture',
        params,
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const manuSlice = createSlice({
  name: 'manufactures',
  initialState,
  reducers: {},
  extraReducers: {
    // crate manufacture
    [createManufacture.pending]: (state) => {
      state.loading = true;
    },
    [createManufacture.fulfilled]: (state, action) => {
      state.loading = false;
      state.manufactures.push(action.payload);
      state.message = state.manufactures;
    },
    [createManufacture.rejected]: (state) => {
      state.loading = false;
    },

    // get manufactures
    [getAllManufactures.pending]: (state) => {
      state.loading = true;
    },
    [getAllManufactures.fulfilled]: (state, action) => {
      state.loading = false;
      state.manufactures = action.payload?.manufactures;
    },
    [getAllManufactures.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default manuSlice.reducer;
