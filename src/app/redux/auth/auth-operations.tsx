import { createAsyncThunk } from '@reduxjs/toolkit';

import { IUserDataRegister, IUserDataLogin } from '../../types/auth/auth';
import { IRegistrationResponse, ILoginResponse, ILogoutResponse, IAuth } from '../../types/auth/axios-auth';

export const register = createAsyncThunk(
  'auth/register',
  async (userData: IUserDataRegister, { rejectWithValue }) => {
    try {
        // const data: IRegistrationResponse = await axiosRegister(userData);
        // return data;
    } catch (error: any) {
        const { data, status } = error.response || {};
        const customError = { data, status };
        return rejectWithValue(customError);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData: IUserDataLogin, { rejectWithValue }) => {
    try {
      // const data: ILoginResponse = await axiosLogin(userData);
      // const { accessToken, refreshToken, sid } = data;
      // const authData = { accessToken, refreshToken, sid };
      // localStorage.setItem('notes-organizer.authData', JSON.stringify(authData));
      // return data;
    } catch (error: any) {
        const { data, status } = error.response || {};
        const customError = { data, status };
        return rejectWithValue(customError);
        }
    }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
        // const data: ILogoutResponse = await axiosLogout();
        // localStorage.removeItem('notes-organizer.authData');
        // return data;
    } catch (error: any) {
        const { data, status } = error.response || {};
        const customError = { data, status };
        return rejectWithValue(customError);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue }) => {
    try {
      // const authDataJSON = localStorage.getItem('notes-organizer.authData')!;
      // const authData = JSON.parse(authDataJSON);
      // const userData: IAuth = authData;
      // const data: ILoginResponse = await axiosGetCurrentUser(userData);
      // return data;
    } catch (error: any) {
        const { data, status } = error.response || {};
        const customError = { data, status };
        return rejectWithValue(customError);
    }
  }
);