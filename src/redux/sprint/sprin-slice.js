import { createSlice } from '@reduxjs/toolkit';
import sprintOperations from './sprin-operations';

const initialState = {
  projects: null,
  sprints: null,
  isLogIn: false,
};

const sprintSlice = createSlice({
  name: 'sprints',
  initialState,
  extraReducers: {
    [sprintOperations.getProject.fulfilled](state, { payload }) {
      state.projects = payload;
      state.isLogIn = true;
    },

    [sprintOperations.postSprint.fulfilled](state, { payload }) {
      state.sprints = payload;
      state.isLogIn = true;
    },
    [sprintOperations.getSprint.fulfilled](state, { payload }) {
      state.sprints = payload;
      state.isLogIn = true;
    },
    [sprintOperations.patchSprint.fulfilled](state, { payload }) {
      state.sprints.titel = payload.title;
      state.isLogIn = false;
    },
    [sprintOperations.delSprint.fulfilled](state, { payload }) {
      console.log(payload);
      state.sprints.sprints = state.sprints.sprints.filter(
        ({ _id }) => _id !== payload,
      );
      state.isLogIn = false;
    },
  },
});

export default sprintSlice.reducer;
