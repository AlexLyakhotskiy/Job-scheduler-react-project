// import { useSelector } from 'react-redux';
// import allSelectors from '../../../redux/sprint/sprin-selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import sprintOperations from '../../../redux/sprint/sprin-operations';
import allSelectors from '../../../redux/sprint/sprin-selectors';
import SpintBtAddProject from '../SpintBtAddProject/SpintBtAddProject';
import SprintBtBack from '../SprintBtBack/SprintBtBack';
import s from './SprintPageProject.module.scss';

const SprintPageProject = () => {
  //  открывать модалку с добавлением людей + запрос на сервер
  const dispatch = useDispatch();
  const { url } = useRouteMatch();

  useEffect(() => {
    dispatch(sprintOperations.getProject());
  }, []);

  const projects = useSelector(state => {
    return allSelectors.newProject(state);
  });

  return (
    <div className={s.sprintProjectConteiner}>
      <SprintBtBack />
      <ul className={s.sprintListProject}>
        {projects &&
          projects.map(project => (
            <li key={project._id} className={s.projectItem}>
              <Link to={`${url}/${project._id}`} className={s.projectLink}>
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
