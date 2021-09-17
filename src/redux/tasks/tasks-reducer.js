import { createSlice } from '@reduxjs/toolkit';
import { addTask, deleteTask, fetchTasks } from './tasks-operations';

const initialState = {
  allTasks: [
    {
      title: 'Task 1',
      hoursPlanned: 1,
      hoursWasted: 0,
      hoursWastedPerDay: [
        {
          currentDay: '2020-12-31',
          singleHoursWasted: 0,
        },
      ],
      id: '507f1f77bcf86cd799439011',
    },
    {
      title: 'Task 2',
      hoursPlanned: 5,
      hoursWasted: 6,
      hoursWastedPerDay: [
        {
          currentDay: '2020-12-31',
          singleHoursWasted: 0,
        },
      ],
      id: '507f1f77bcf86cd799',
    },
  ],
  filter: '',
  error: null,
  loading: false,
  sprintId: '0qW36CAdtUCw5HB0DJaG',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  axtraReducers: {
    [addTask.pending](state) {
      state.loading = true;
    },
    [addTask.pending](state, { payload }) {
      state.error = null;
      state.task.push(payload);
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
      state.tasks = payload;
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
      state.tasks.filter(task => task.id !== payload);
      state.loading = false;
    },
    [deleteTask.rejected](state, { payload }) {
      state.error = payload;
      state.loading = false;
    },
  },
  // [filterChange](state, { payload }) {
  //   state.filter = payload;
  // },
});

export default tasksSlice.reducer;
