import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';

const initialState = {
  user: null,
  token: null,
  isStaff: null,
  isLoading: false,
  status: null,
  isPasswordCorrect: null,
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({
    email, password, firstName, secondName,
  }) => {
    try {
      const { data } = await axios.post('auth/register', {
        email,
        password,
        firstName,
        secondName,
      });
      if (data.token) {
        window.localStorage.setItem('token', data.token);
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password, isStaff }) => {
    try {
      const { data } = await axios.post('auth/login', {
        email,
        password,
        isStaff,
      });
      if (data.token) {
        window.localStorage.setItem('token', data.token);
      }
      if (data.isStaff) {
        window.localStorage.setItem('isStaff', data.isStaff);
      }else{
        window.localStorage.setItem('isStaff', false);
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const getMe = createAsyncThunk('auth/me', async () => {
  try {
    const { data } = await axios.get('auth/me');
    if (data.user) {
      window.localStorage.setItem('isStaff', data.user.isStaff);
    }
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const deliveryInfo = createAsyncThunk(
  'auth/deliveryInfo',
  async ({
    firstName,
    secondName,
    number,
    adress1,
    adress2,
    country,
    city,
    state,
    zipcode,
  }) => {
    try {
      const { data } = await axios.post('auth/deliveryInfo', {
        firstName,
        secondName,
        number,
        adress1,
        adress2,
        country,
        city,
        state,
        zipcode,
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const changeEmail = createAsyncThunk(
  'auth/changeEmail',
  async ({ token, password }) => {
    try {
      const { data } = await axios.post('auth/changeEmail', {
        token,
        password,
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    // register user
    [registerUser.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload?.message;
      state.user = action.payload.user;
      state.isStaff = action.payload?.isStaff;
      state.token = action.payload.token;
    },
    [registerUser.rejected]: (state, action) => {
      state.status = action.payload.message;
      state.isLoading = false;
    },

    // loginUser

    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload?.message;
      state.isStaff = action.payload?.isStaff;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [loginUser.rejected]: (state, action) => {
      state.status = action.payload.message;
      state.isLoading = false;
    },

    // get me

    [getMe.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [getMe.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = null;
      state.isStaff = action.payload?.isStaff;
      state.user = action.payload?.user;
      state.token = action.payload?.token;
    },
    [getMe.rejected]: (state, action) => {
      state.status = action.payload.message;
      state.isLoading = false;
    },

    // changemail
  },
});

export const checkIsAuth = (state) => Boolean(state.auth.token);
export const checkIsPassCorrect = (state) => Boolean(state.auth.isPasswordCorrect);
export const checkIsStaff = (state) => Boolean(state.auth.isStaff);
export default authSlice.reducer;
