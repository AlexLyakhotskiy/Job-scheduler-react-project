// import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   addProjectApi,
//   deleteProjectApi,
//   getProjectsApi,
// } from '../apiServices';

// export const getProjects = createAsyncThunk(
//   'projects/getProjects',
//   async (_, { rejectWithValue }) => {
//     try {
//       const projectsGet = await getProjectsApi();
//       return projectsGet;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );

// export const addProjects = createAsyncThunk(
//   'projects/addProjects',
//   async ({ title, description }, { rejectWithValue }) => {
//     try {
//       const projectsAdd = await addProjectsApi({ title, description});
//       return projectsAdd;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );

// export const deleteProjects = createAsyncThunk(
//   'projects/deleteProjects',
//   async (projectsId, { rejectWithValue }) => {
//     try {
//       await deleteProjectsApi(projectsId);
//       return projectsId;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );
///////////////////////////////
// export const editContacts = createAsyncThunk(
//   'contacts/editContacts',
//   async ({ editContactId, name, number }, { rejectWithValue }) => {
//     try {
//       const contactsEdit = await editContactsApi({
//         editContactId,
//         name,
//         number,
//       });
//       return contactsEdit;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );

// // export const editContacts =
// //   ({ editContactId, name, number }) =>
// //   async dispatch => {
// //     dispatch(editContactsReguests());
// //     try {
// //       const contactsEdit = await editContactsApi({
// //         editContactId,
// //         name,
// //         number,
// //       });
// //       dispatch(editContactsSuccess(contactsEdit));
// //     } catch (error) {
// //       dispatch(editContactsError(error));
// //     }
// //   };
