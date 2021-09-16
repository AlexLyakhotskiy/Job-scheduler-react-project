const newProject = state => {
  return state?.sprints?.project;
};

const allSprints = state => {
  console.log(state?.sprints);
  return state?.sprints;
};

const allSelectors = { newProject, allSprints };

export default allSelectors;
