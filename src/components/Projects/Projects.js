import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getIsLoading,
  getProjectsList,
} from '../../redux/projects/projectSelectors';
import {
  addProjects,
  getProjects,
} from '../../redux/projects/projectOperations';
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
  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };
  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'title':
        setTitleInput(value);
        break;
      case 'description':
        setDescriptionInput(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addProjects({ title: titleInput, description: descriptionInput }));
    setTitleInput('');
    setDescriptionInput('');
    toggleModal();
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
          <h2>Створення проекту</h2>
          <AddProjectsForm />
          <form className="addForm" onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              name="title"
              autoComplete="off"
              autoFocus
              placeholder="Title"
              value={titleInput}
              onChange={handleChange}
            />
            <input
              className="input"
              type="text"
              name="description"
              autoComplete="off"
              autoFocus
              placeholder="Description"
              value={descriptionInput}
              onChange={handleChange}
            />

            <button className={s.btn} type="submit">
              Save
            </button>
            <button className={s.btnCencel} type="button" onClick={toggleModal}>
              Cancel
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default Projects;
