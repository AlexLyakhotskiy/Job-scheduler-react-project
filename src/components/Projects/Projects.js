// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { getProjects } from '../../redux/projects/projectOperations';
import ProjectItem from '../ProjectItem/ProjectItem';
import IconBtn from '../IconBtn/IconBtn.jsx';
import s from '../Projects/Projects.module.scss';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'short description',
      _id: '507f1f77bcf86cd799439011',
      members: ['test@email.com'],
      sprints: ['507f1f77bcf86cd799439012'],
      __v: 0,
    },
    {
      title: 'Project 2',
      description: 'short description',
      _id: '12efff',
      members: ['test@email.com'],
      sprints: ['507f1f77bcf86cd799439012'],
      __v: 0,
    },
    {
      title: 'Project very long name',
      description: 'short description',
      _id: '13efff',
      members: ['test@email.com'],
      sprints: ['507f1f77bcf86cd799439012'],
      __v: 0,
    },
    {
      title: 'Project 4',
      description: 'short description',
      _id: '14fff',
      members: ['test@email.com'],
      sprints: ['507f1f77bcf86cd799439012'],
      __v: 0,
    },
  ];

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProjects());
  // }, [dispatch]);

  return (
    <>
      <div className={s.projectsContainer}>
        <div className={s.projectsHeader}>
          <h1 className={s.title}>Проекти</h1>
          <label className={s.labeladdBtn}>
            <IconBtn onClick={() => {}} icon="add" className={s.addBtn} />
            <span className={s.textAddBtn}>Створити проект</span>
          </label>
        </div>

        <ul className={s.list}>
          {projects.length > 0 &&
            projects.map(({ title, _id, description }) => (
              <ProjectItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                onDeleteContact={() => {}}
              />
            ))}
        </ul>
      </div>
    </>
  );
};

export default Projects;
