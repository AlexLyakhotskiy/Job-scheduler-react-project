import { createSlice } from '@reduxjs/toolkit';
import { filterChange } from './tasks-actions';
import { addTask, deleteTask, editTask, fetchTasks } from './tasks-operations';

const initialState = {
  allTasks: [],
  filter: '',
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
      const removeIndex = state.allTasks.findIndex(({ id }) => id === payload);
      state.allTasks.splice(removeIndex, 1);
      state.loading = false;
    },
    [deleteTask.rejected](state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
    [editTask.pending](state) {
      state.loading = true;
    },
    [editTask.fulfilled](state, { payload }) {
      state.error = null;
      state.allTasks.map(task => (task.id === payload.id ? payload : task));
      state.loading = false;
    },
    [editTask.rejected](state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
    [filterChange](state, { payload }) {
      state.filter = payload;
    },
  },
});

export default tasksSlice.reducer;
