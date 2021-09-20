import { useState } from 'react';
import AddProjectsForm from '../../AddProjectsForm/AddProjectsForm';
import IconBtn from '../../IconBtn/IconBtn';
import Modal from '../../Modal';
import s from './SpintBtAddProject.module.scss';

const SpintBtAddProject = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(state => !state);
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
