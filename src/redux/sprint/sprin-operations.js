/** @format */

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';
axios.defaults.headers.common.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTQzMDFlNWY0YTZjMDNkYjhjYzhiYjAiLCJzaWQiOiI2MTQ1ZDhlY2Y0YTZjMDNkYjhjYzhkMjQiLCJpYXQiOjE2MzE5Njc0NjgsImV4cCI6MTYzMTk3MTA2OH0.5uwlEfGGDw0x_rFXmdomLiwY2-m2qqEUh_w_LRGoioI';

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
  '/sprint/patchSprint',
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
  postSprint,
  getSprint,
  patchSprint,
  delSprint,
};

export default sprintOperations;
