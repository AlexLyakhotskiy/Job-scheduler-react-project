import { createAction } from '@reduxjs/toolkit';

export const filterChange = createAction('tasks/changeFilter');

export const filterByDate = createAction('tasks/filterByDate');
