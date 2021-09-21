import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getIsLoading,
  getProjectsList,
} from '../../redux/projects/projectSelectors';
import { getProjects } from '../../redux/projects/projectOperations';
import ProjectItem from '../ProjectItem/ProjectItem';
import IconBtn from '../IconBtn/IconBtn.jsx';
import Modal from '../Modal/Modal';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner.jsx';
import s from '../Projects/Projects.module.scss';
import AddProjectsForm from '../AddProjectsForm/AddProjectsForm';

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector(getProjectsList);
  const isLoading = useSelector(getIsLoading);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      <div className={s.projectsContainer}>
        <div className={s.projectsHeader}>
          <h1 className={s.title}>Проекти</h1>
          <label className={s.labeladdBtn}>
            <IconBtn onClick={toggleModal} icon="add" className={s.addBtn} />
            <span className={s.textAddBtn}>Створити проект</span>
          </label>
        </div>

        {isLoading && <LoaderSpinner />}

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
      {showModal && (
        <Modal closeModal={toggleModal}>
          <AddProjectsForm closeModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default Projects;
