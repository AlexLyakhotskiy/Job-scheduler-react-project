/** @format */

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.headers.common.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTQzMDFlNWY0YTZjMDNkYjhjYzhiYjAiLCJzaWQiOiI2MTQ2NGEzOWY0YTZjMDNkYjhjYzhkY2UiLCJpYXQiOjE2MzE5OTY0NzMsImV4cCI6MTYzMjAwMDA3M30.WQFOtPsWIoqGlUZ-bBeYLaeLoJghAY5ch3-DW51KoyI';

const getSprint = createAsyncThunk(
  '/sprint/getSprint',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`sprint/${id}`);
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
  async ({ projectId, body }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/sprint/${projectId}`, body);
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
      const { data } = await axios.patch(`sprint/title/${id}`, newTitel);
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
