import { createSlice } from '@reduxjs/toolkit';
import sprintOperations from './sprin-operations';

const initialState = {
  items: null,
  isLogIn: false,
  isLoding: false,
  titelProject: null,
  error: null,
};

const sprintSlice = createSlice({
  name: 'sprints',
  initialState,
  extraReducers: {
    // getSprint
    [sprintOperations.getSprint.pending](state, { payload }) {
      state.isLoding = true;
    },
    [sprintOperations.getSprint.fulfilled](state, { payload }) {
      state.items = payload.sprints;
      state.isLoding = false;
      state.isLogIn = true;
    },
    [sprintOperations.getSprint.rejected](state, { payload }) {
      state.error = payload;
      state.isLoding = false;
    },

    // postSprint
    [sprintOperations.postSprint.pending](state, { payload }) {
      state.isLoding = true;
    },
    [sprintOperations.postSprint.fulfilled](state, { payload }) {
      state.items = payload;
      state.isLogIn = true;
      state.isLoding = false;
    },
    [sprintOperations.postSprint.rejected](state, { payload }) {
      state.error = payload;
      state.isLoding = false;
    },

    // patchSprint
    [sprintOperations.patchSprint.pending](state, { payload }) {
      state.isLoding = true;
    },
    [sprintOperations.patchSprint.fulfilled](state, { payload }) {
      state.items.titel = payload.title;
      state.isLogIn = true;
      state.isLoding = false;
    },
    [sprintOperations.patchSprint.rejected](state, { payload }) {
      state.error = payload;
      state.isLoding = false;
    },

    // delSprint
    [sprintOperations.delSprint.pending](state, { payload }) {
      state.isLoding = true;
    },
    [sprintOperations.delSprint.fulfilled](state, { payload }) {
      state.items = state.items.filter(({ _id }) => _id !== payload);
      state.isLogIn = true;
      state.isLoding = false;
    },
    [sprintOperations.patchSprint.rejected](state, { payload }) {
      state.error = payload;
      state.isLoding = false;
    },
  },
});

export default sprintSlice.reducer;
