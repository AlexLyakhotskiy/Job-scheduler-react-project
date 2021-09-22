import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import IconBtn from '../../IconBtn/IconBtn';
import Modal from '../../Modal';
import s from './SpintBtAddSprint.module.scss';
import FormAddSprint from '../FormAddSprint/FormAddSprint';

const SpintBtAddSprint = ({ projectId }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(state => !state);
  };

  return (
    <>
      <button
        type="button"
        className={s.conteinerBtnAddSrint}
        onClick={toggleModal}
      >
        <IconBtn icon={'add'} className={s.btnSprintAdd} />
        <span className={s.btnSprintAddText}>Створити спринт</span>
      </button>
      {showModal && (
        <Modal closeModal={toggleModal}>
          <FormAddSprint toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default SpintBtAddSprint;
