import { createReducer } from '@reduxjs/toolkit';

import {
  addProjects,
  deleteProjects,
  getProjects,
} from './projectOperations.js';

const projectsReducer = createReducer([], {
  [getProjects.fulfilled]: (_, { payload }) => payload,
  [addProjects.fulfilled]: (state, { payload }) => [...state, payload],
  //  [editContacts.fulfilled]: (state, { payload }) =>
  //   state.map(item => (item.id === payload.id ? payload : item)),

  [deleteProjects.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export default projectsReducer;
