/** @format */

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';
axios.defaults.headers.common.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTQzMDFlNWY0YTZjMDNkYjhjYzhiYjAiLCJzaWQiOiI2MTQ1YWIyNWY0YTZjMDNkYjhjYzhjZjYiLCJpYXQiOjE2MzE5NTU3NDksImV4cCI6MTYzMTk1OTM0OX0.QKBiobDlPgZRK5-tAlaytO507e-ZuDhDt0MDdgARU20';

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
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const patchSprint = createAsyncThunk(
  '/sprint/patchSprint}',
  async ({ id, newTitel }) => {
    try {
      const { data } = await axios.patch(`/sprint/title/${id}`, newTitel);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  },
);

const delSprint = createAsyncThunk('/sprint/delSprint', async id => {
  try {
    await axios.delete(`/sprint/${id}`);
    return id;
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
