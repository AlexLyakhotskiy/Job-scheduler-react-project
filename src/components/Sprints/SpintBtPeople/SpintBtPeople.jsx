import { useState } from 'react';
import Modal from '../../Modal';
import Svg from '../../Svg/Svg';
import s from './SpintBtPeople.module.scss';
import FormAddPeople from '../FormAddPeople/FormAddPeople';

const SpintBtPeople = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(state => !state);
  };

  return (
    <>
      <div className={s.conteinerPeopleAdd}>
        <button className={s.btnPeopleAdd} onClick={toggleModal}>
          <Svg icon={'#icon-add-people'} className={s.iconPeopleAdd} />
          Додати людей
        </button>
      </div>

      {showModal && (
        <Modal closeModal={toggleModal}>
          <FormAddPeople toggleModal = {() => toggleModal()} />
        </Modal>
      )}
    </>
  );
};

export default SpintBtPeople;
