import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

const token =
  (axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTQ0NzE5OGY0YTZjMDNkYjhjYzhjNzAiLCJzaWQiOiI2MTQ0YTk0MGY0YTZjMDNkYjhjYzhjYjYiLCJpYXQiOjE2MzE4ODk3MjgsImV4cCI6MTYzMTg5MzMyOH0.rl79MMIEsKJFQBY9uLUGQcSvx8xuGSznYYPxu5a7sq4`);

const sprintId = '6144767af4a6c03db8cc8c74';

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
