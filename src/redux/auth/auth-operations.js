import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  apiLoginUser,
  apiLogoutUser,
  apiRefreshUser,
  apiRegisterUser,
} from '../../utils/apiServices';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (user, { rejectWithValue }) => {
    try {
      await apiRegisterUser(user);
      const data = await apiLoginUser(user);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (user, { rejectWithValue }) => {
    try {
      return await apiLoginUser(user);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await apiLogoutUser();
      return;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const resetUser = createAsyncThunk('auth/reset', async (_, thunk) => {
  const state = thunk.getState();
  const stateToken = state.auth.refreshToken;

  if (!stateToken) {
    return thunk.rejectWithValue('oops');
  }

  const stateSid = state.auth.sid;

  try {
    const data = await apiRefreshUser(stateToken, stateSid);
    return data;
  } catch (error) {
    return thunk.rejectWithValue(error.message);
  }
});
