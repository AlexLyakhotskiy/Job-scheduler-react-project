import { createSlice } from '@reduxjs/toolkit';

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
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  axtraReducers: {},
});

export default tasksSlice.reducer;
