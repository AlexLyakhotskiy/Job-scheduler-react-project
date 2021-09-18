import { createSlice } from '@reduxjs/toolkit';
import sprintOperations from './sprin-operations';

const initialState = {
  items: null,
  isLogIn: false,
  titelProject: null,
};

const sprintSlice = createSlice({
  name: 'sprints',
  initialState,
  extraReducers: {
    [sprintOperations.postSprint.fulfilled](state, { payload }) {
      state.items = payload;
      state.isLogIn = true;
    },
    [sprintOperations.getSprint.fulfilled](state, { payload }) {
      state.items = payload.sprints;
      state.isLogIn = true;
    },
    [sprintOperations.patchSprint.fulfilled](state, { payload }) {
      state.items.titel = payload.title;
      state.isLogIn = false;
    },
    [sprintOperations.delSprint.fulfilled](state, { payload }) {
      state.items = state.items.filter(({ _id }) => _id !== payload);
      state.isLogIn = false;
    },
  },
});

export default sprintSlice.reducer;
