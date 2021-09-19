import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

const token =
  (axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTQzMTk1ZmY0YTZjMDNkYjhjYzhiZDMiLCJzaWQiOiI2MTQ3MDc4Y2Y0YTZjMDNkYjhjYzhlNDYiLCJpYXQiOjE2MzIwNDQ5NDAsImV4cCI6MTYzMjA0ODU0MH0.oXLs6pI4ssTb5Q2cl2k68l7oHXnmRO99i8v6fE7xG8c`);

const sprintId = '61470248f4a6c03db8cc8e40';

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`task/${sprintId}`, task);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`task/${sprintId}`);
      if (data.message) {
        return rejectWithValue(data.message);
      }
      console.log(`data`, data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const editTask = createAsyncThunk(
  'tasks/editTasks',
  async (task, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/task/${task.id}`, {
        date: task.date,
        hours: task.hours,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, { rejectWithValue }) => {
    try {
      await axios.delete(`task/${taskId}`);
      return taskId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
