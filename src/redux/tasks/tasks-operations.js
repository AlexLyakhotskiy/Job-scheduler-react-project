import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

const token =
  (axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTQzMTk1ZmY0YTZjMDNkYjhjYzhiZDMiLCJzaWQiOiI2MTQ3ZDA2M2Y0YTZjMDNkYjhjYzhmZTEiLCJpYXQiOjE2MzIwOTYzNTUsImV4cCI6MTYzMjA5OTk1NX0.Z2fglbQ1lV7PetLhHwLSAHbsA1rDetgpWyZLsnY_gOU`);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`task/${task.sprintId}`, {
        title: task.title,
        hoursPlanned: task.hoursPlanned,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (sprintId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`task/${sprintId}`);
      if (data.message) {
        return rejectWithValue(data.message);
      }
      console.log(`data`, data);
      return data.map(item => ({ ...item, id: item._id }));
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
      console.log(`data`, data);
      return {
        date: task.date,
        hours: task.hours,
        id: task.id,
        newWastedHours: data.newWastedHours,
      };
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
