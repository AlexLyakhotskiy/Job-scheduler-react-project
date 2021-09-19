import { createSelector } from '@reduxjs/toolkit';

export const getTasksSelector = state => state.tasks.allTasks;
export const getFilterSelector = state => state.tasks.filter;

console.log(`getFilterSelector`, getFilterSelector);

export const getFilterTasksSelector = createSelector(
  [getTasksSelector, getFilterSelector],
  (tasks, filter) => {
    let filteredTasks = tasks;
    if (filter) {
      filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(filter.toLowerCase()),
      );
      return filteredTasks;
    } else {
      return tasks;
    }
  },
);
