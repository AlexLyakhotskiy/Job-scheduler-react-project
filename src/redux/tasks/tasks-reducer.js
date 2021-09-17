import { createSlice } from '@reduxjs/toolkit';
import { addTask, deleteTask, fetchTasks } from './tasks-operations';

const initialState = {
  allTasks: [],
  error: null,
  loading: false,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: {
    [addTask.pending](state) {
      state.loading = true;
    },
    [addTask.fulfilled](state, { payload }) {
      state.error = null;
      state.allTasks.push(payload);
      state.loading = false;
      console.log(`payload`, payload);
    },
    [addTask.rejected](state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
    [fetchTasks.pending](state) {
      state.loading = true;
    },
    [fetchTasks.fulfilled](state, { payload }) {
      state.error = null;
      state.allTasks = payload;
      console.log(`payload`, payload);
      state.loading = false;
    },
    [fetchTasks.rejected](state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
    [deleteTask.pending](state) {
      state.loading = true;
    },
    [deleteTask.fulfilled](state, { payload }) {
      state.error = null;
      state.allTasks.filter(task => task.id !== payload);
      state.loading = false;
    },
    [deleteTask.rejected](state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
  },
});

export default tasksSlice.reducer;
