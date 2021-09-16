import { createSlice } from '@reduxjs/toolkit';
import sprintOperations from './sprin-operations';

const initialState = {
  project: { title: null, description: null, id: null },
  sprints: null,
  token: null,
  isLogIn: false,
};

const sprintSlice = createSlice({
  name: 'sprint',
  initialState,
  extraReducers: {
    [sprintOperations.getProject.fulfilled](state, action) {
      state.project.title = action.payload[0].title;
      state.project.description = action.payload[0].description;
      state.project.id = action.payload[0]._id;
      state.isLogIn = true;
    },

    [sprintOperations.postSprint.fulfilled](state, action) {
      state.sprints = action.payload.sprint;
      state.isLogIn = true;
    },
    [sprintOperations.getSprint.fulfilled](state, action) {
      state.sprints = action.payload.sprints;
      state.isLogIn = true;
    },
    [sprintOperations.patchSprint.fulfilled](state, action) {
      state.sprint = action.payload;
      state.token = null;
      state.isLogIn = false;
    },
    [sprintOperations.patchSprint.delSprint](state, action) {
      state.sprint = action.payload.sprint;
      state.token = action.payload.token;
      state.isLogIn = false;
    },
  },
});

export default sprintSlice.reducer;
