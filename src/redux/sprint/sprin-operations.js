/** @format */

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.headers.common.Authorization =
// 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTQzMDFlNWY0YTZjMDNkYjhjYzhiYjAiLCJzaWQiOiI2MTQ4MjQ4OWY0YTZjMDNkYjhjYzhmZTQiLCJpYXQiOjE2MzIxMTc4OTcsImV4cCI6MTYzMjEyMTQ5N30.VRI5Cn2Hw0kHNrJRMHVBwvGuZ4PVmrDLOBip4i9e4wM';

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
  async ({ id, title }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`sprint/title/${id}`, title);
      return { data, id };
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
