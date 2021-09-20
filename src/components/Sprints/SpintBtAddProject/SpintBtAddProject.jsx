import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProjects } from '../../../redux/projects/projectOperations';
import AddProjectsForm from '../../AddProjectsForm/AddProjectsForm';
import IconBtn from '../../IconBtn/IconBtn';
import Modal from '../../Modal';
import s from './SpintBtAddProject.module.scss';

const SpintBtAddProject = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(state => !state);
  };

  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');

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
      <div className={s.conteinerBtnAddProj}>
        <IconBtn icon={'add'} className={s.btnProjAdd} onClick={toggleModal} />
        <span className={s.btnSprintAddText}>Створити проект</span>
      </div>
      {showModal && (
        <Modal closeModal={toggleModal}>
          <AddProjectsForm closeModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default SpintBtAddProject;
