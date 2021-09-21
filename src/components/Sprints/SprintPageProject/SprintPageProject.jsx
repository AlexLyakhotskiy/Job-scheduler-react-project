import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProjects } from '../../../redux/projects/projectOperations';
import { routes } from '../../../routes/routes';
import SpintBtAddProject from '../SpintBtAddProject/SpintBtAddProject';
import SprintBtBack from '../SprintBtBack/SprintBtBack';

import s from './SprintPageProject.module.scss';

const SprintPageProject = ({ projects }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!projects?.length) dispatch(getProjects());
  }, [dispatch, projects?.length]);

  return (
    <div className={s.sprintProjectConteiner}>
      <SprintBtBack />
      <ul className={s.sprintListProject}>
        {projects?.length &&
          projects.map(project => (
            <li key={project._id} className={s.projectItem}>
              <Link
                to={`${routes.projects}/${project._id}/sprints`}
                className={s.projectLink}
              >
                <span>{project.title}</span>
              </Link>
            </li>
          ))}
      </ul>
      <div>
        <SpintBtAddProject />
      </div>
    </div>
  );
};

export default SprintPageProject;
