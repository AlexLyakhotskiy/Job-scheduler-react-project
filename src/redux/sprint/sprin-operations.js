/** @format */

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';
axios.defaults.headers.common.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmUyOTU2OGI5YjMxYzAwMTc2MjQ3YTQiLCJzaWQiOiI2MTQzYWI2OGY0YTZjMDNkYjhjYzhjM2UiLCJpYXQiOjE2MzE4MjQ3NDQsImV4cCI6MTYzMTgyODM0NH0.siHxlKpp6EUitkb9yofIJG6fPekqJq3zo2uaHelDQG8';

const getProject = createAsyncThunk('/project/getProject', async () => {
  try {
    const { data } = await axios.get(`/project`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const postSprint = createAsyncThunk(
  '/sprint/postSprint',
  async ({ id, body }) => {
    try {
      const { data } = await axios.post(`/sprint/${id}`, body);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  },
);

const getSprint = createAsyncThunk('/sprint/getSprint', async id => {
  try {
    const { data } = await axios.get(`/sprint/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const patchSprint = createAsyncThunk('/sprint/patchSprint}', async ({ id }) => {
  try {
    const { data } = await axios.patch(`/sprint/title/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const delSprint = createAsyncThunk('/sprint', async id => {
  try {
    const { data } = await axios.delete(`/sprint/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const sprintOperations = {
  getProject,
  postSprint,
  getSprint,
  patchSprint,
  delSprint,
};

export default sprintOperations;
