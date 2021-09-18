import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { getProjects } from '../../../redux/projects/projectOperations';
import { getProjectsList } from '../../../redux/projects/projectSelectors';
import { routes } from '../../../routes/routes';
import SpintBtAddProject from '../SpintBtAddProject/SpintBtAddProject';
import SprintBtBack from '../SprintBtBack/SprintBtBack';

import s from './SprintPageProject.module.scss';

const SprintPageProject = () => {
  const dispatch = useDispatch();

  const projects = useSelector(getProjectsList);

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
                <div className={s.projectConteiner}>
                  <div className={s.projectConteinerColor}></div>
                  <span>{project.title}</span>
                </div>
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
