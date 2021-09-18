const newProject = state => {
  return state?.sprints.projects;
};

const allSprints = state => {
  return state?.sprints?.sprints?.sprints;
};

const isLogIn = state => {
  return state?.sprints?.isLogIn;
};

const allSelectors = { newProject, allSprints, isLogIn };

export default allSelectors;
