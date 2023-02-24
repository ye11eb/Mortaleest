/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';
import manuSlice from './features/Manufactures/manuSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    manufactures: manuSlice,
  },
});
