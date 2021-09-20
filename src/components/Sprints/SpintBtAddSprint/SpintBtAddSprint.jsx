import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import IconBtn from '../../IconBtn/IconBtn';
import Modal from '../../Modal';
import s from './SpintBtAddSprint.module.scss';
import sprintOperations from '../../../redux/sprint/sprin-operations';
import FormAddSprint from '../FormAddSprint/FormAddSprint';

const SpintBtAddSprint = ({ projectId }) => {
  // const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  // const [titleInput, setTitleInput] = useState('');
  // const [valueInput, setValueInput] = useState('');
  // const [startDate, setStartDate] = useState(new Date());

  // useEffect(() => {
  //   dispatch(getProjects());
  // }, [dispatch]);

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  // const handleChange = event => {
  //   const { value } = event.target;
  //   setTitleInput(value);
  // };

  // const handleChangeValue = event => {
  //   const { value } = event.target;
  //   setValueInput(value);
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   dispatch(
  //     sprintOperations.postSprint({
  //       projectId: '61449ee3f4a6c03db8cc8cb1',
  //       body: {
  //         title: titleInput,
  //         endDate: '2021-11-29',
  //         duration: valueInput,
  //       },
  //     }),
  //   );

  // toggleModal();
  // };
  return (
    <>
      <div className={s.conteinerBtnAddSrint} onClick={toggleModal}>
        <IconBtn icon={'add'} className={s.btnSprintAdd} />
        <span className={s.btnSprintAddText}>Создать спринт</span>
      </div>
      {showModal && (
        <Modal closeModal={toggleModal}>
          <FormAddSprint />
          {/* <h2>Создать спринт</h2>
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
              type="number"
              name="title"
              autoComplete="off"
              autoFocus
              placeholder="Тривалисть"
              value={valueInput}
              onChange={handleChangeValue}
            />
            <input type="radio" id="contactChoice1" name="check" />
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
            />

            <button className={s.btnCencel} type="submit">
              готово
            </button>
          </form> */}
        </Modal>
      )}
    </>
  );
};

export default SpintBtAddSprint;
