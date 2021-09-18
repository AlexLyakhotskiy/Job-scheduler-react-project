/** @format */

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';
axios.defaults.headers.common.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTQzMDFlNWY0YTZjMDNkYjhjYzhiYjAiLCJzaWQiOiI2MTQ2MGQxY2Y0YTZjMDNkYjhjYzhkN2UiLCJpYXQiOjE2MzE5ODA4MjgsImV4cCI6MTYzMTk4NDQyOH0.bkZ0LQcwVw_96aObGY3-u6omlQJBEuBNlpov1rkxmyQ';

const getSprint = createAsyncThunk(
  '/sprint/getSprint',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/sprint/${id}`);
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        return rejectWithValue('Bad request (invalid id) / No token provided');
      }
      if (error.response.status === 401) {
        return rejectWithValue('Unauthorized (invalid access token');
      }
      if (error.response.status === 404) {
        return rejectWithValue(
          'Project not found / Invalid user / Invalid session',
        );
      }
      return rejectWithValue(error.message);
    }
  },
);

const postSprint = createAsyncThunk(
  '/sprint/postSprint',
  async (id, body, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/sprint/${id}`, body);
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        return rejectWithValue('Bad request (invalid id) / No token provided');
      }
      if (error.response.status === 401) {
        return rejectWithValue('Unauthorized (invalid access token');
      }
      if (error.response.status === 404) {
        return rejectWithValue(
          'Project not found / Invalid user / Invalid session',
        );
      }
      return rejectWithValue(error.message);
    }
  },
);

const patchSprint = createAsyncThunk(
  '/sprint/patchSprint',
  async (id, newTitel, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/sprint/title/${id}`, newTitel);
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        return rejectWithValue('Bad request (invalid id) / No token provided');
      }
      if (error.response.status === 401) {
        return rejectWithValue('Unauthorized (invalid access token');
      }
      if (error.response.status === 404) {
        return rejectWithValue(
          'Project not found / Invalid user / Invalid session',
        );
      }
      return rejectWithValue(error.message);
    }
  },
);

const delSprint = createAsyncThunk(
  '/sprint/delSprint',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/sprint/${id}`);
      return id;
    } catch (error) {
      if (error.response.status === 400) {
        return rejectWithValue('Bad request (invalid id) / No token provided');
      }
      if (error.response.status === 401) {
        return rejectWithValue('Unauthorized (invalid access token');
      }
      if (error.response.status === 404) {
        return rejectWithValue(
          'Project not found / Invalid user / Invalid session',
        );
      }
      return rejectWithValue(error.message);
    }
  },
);

const sprintOperations = {
  postSprint,
  getSprint,
  patchSprint,
  delSprint,
};

export default sprintOperations;
