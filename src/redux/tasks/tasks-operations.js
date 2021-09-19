import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

const token =
  (axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmUyOTU2OGI5YjMxYzAwMTc2MjQ3YTQiLCJzaWQiOiI2MTQ2ODg0ZGY0YTZjMDNkYjhjYzhlMjQiLCJpYXQiOjE2MzIwMTIzNjUsImV4cCI6MTYzMjAxNTk2NX0.k2O5T_z7omyv0x6yWV9bi3ADnt8Ht-MCfL3GgoEhED4`);

const sprintId = '61467b93f4a6c03db8cc8e1b';

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
