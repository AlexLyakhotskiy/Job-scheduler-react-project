import axios from 'axios';

axios.defaults.baseURL = 'https://sbc-backend.goit.global/';

// обьект с двумя мотодами, добавить токен в заголовок запроса
//     и обнулить токен из заголовка запроса
const apiToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// (async () => {
//   const data = await apiLoginUser({
//     email: 'altest@gmail.com',
//     password: 'qwer123',
//   });
//   console.log(data);
// })();

// ========================= для authOperations =============================

// userData это обьект с двумя ключами 'email' и 'password'
export async function apiRegisterUser(userData) {
  try {
    const { data } = await axios.post('/auth/register', userData);
    apiToken.set(data.accessToken);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

// userData это обьект с двумя ключами 'email' и 'password'
export async function apiLoginUser(userData) {
  try {
    const { data } = await axios.post('/auth/login', userData);
    apiToken.set(data.accessToken);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function apiLogoutUser() {
  try {
    await axios.post('/auth/logout');
    apiToken.unset();
    return;
  } catch (error) {
    throw new Error(error);
  }
}

// в эту функцию нужно передать рефреш токен и сид из сторы
export async function apiRefreshUser(RefreshToken, sid) {
  try {
    apiToken.set(RefreshToken);
    const { data } = await axios.post('/auth/refresh', { sid });
    apiToken.set(data.accessToken);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

// ========================= для projectOperations =============================

// projectData это обьект с двумя ключами 'title' и 'description'
export async function apiAddProject(projectData) {
  try {
    const { data } = await axios.post('/project', projectData);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function apiGetProjects() {
  // apiToken.set(
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTQ0NGVmYmY0YTZjMDNkYjhjYzhjNTAiLCJzaWQiOiI2MTQ0NGYzZGY0YTZjMDNkYjhjYzhjNTEiLCJpYXQiOjE2MzE4NjY2ODUsImV4cCI6MTYzNDQ5NDY4NX0.Rx8eJEx0u1ZE2FkUrVWHVVgsn64rvOkZA3PBhfQS_gI ',
  // );
  try {
    const { data } = await axios.get('/project');
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

// ContributorEmail это обьект с одним ключом 'email'
export async function apiAddContributorProjectById(projectId, ContributorData) {
  try {
    const { data } = await axios.post(
      `/project/contributor/${projectId}`,
      ContributorData,
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

// titleData это обьект с одним ключом 'title'
export async function apiChangeProjectTitleById(projectId, titleData) {
  try {
    const { data } = await axios.patch(
      `/project/title/${projectId}`,
      titleData,
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function apiRemoveProjectById(projectId) {
  try {
    await axios.delete(`/project/${projectId}`);
    return;
  } catch (error) {
    throw new Error(error);
  }
}

// ========================= для sprintsOperations =============================

// sprintData это обьект с тремя ключами 'title' и 'endDate', 'duration' - тип number
export async function apiAddSprintByProjectId(projectId, sprintData) {
  try {
    const { data } = await axios.post(`/sprint/${projectId}`, sprintData);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function apiGetSprintsByProjectId(projectId) {
  try {
    const { data } = await axios.get(`/sprint/${projectId}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

// titleData это обьект с одним ключом 'title'
export async function apiChangeSprintTitleById(sprintId, titleData) {
  try {
    const { data } = await axios.patch(`/sprint/title/${sprintId}`, titleData);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function apiRemoveSprintById(sprintId) {
  try {
    await axios.delete(`/sprint/${sprintId}`);
    return;
  } catch (error) {
    throw new Error(error);
  }
}

// ========================= для tasksOperations =============================

// taskData это обьект с двумя ключами 'title' и 'hoursPlanned' - тип number
export async function apiAddTaskBySprintId(sprintId, taskData) {
  try {
    const { data } = await axios.post(`/task/${sprintId}`, taskData);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function apiGetTasksBySprintId(sprintId) {
  try {
    const { data } = await axios.get(`/task/${sprintId}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

// taskData это обьект с двумя ключами 'date' и 'hours' - тип number
export async function apiChangeTaskDayHoursById(taskId, taskData) {
  try {
    const { data } = await axios.patch(`/task/${taskId}`, taskData);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function apiRemoveTaskById(taskId) {
  try {
    await axios.delete(`/task/${taskId}`);
    return;
  } catch (error) {
    throw new Error(error);
  }
}
