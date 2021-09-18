import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import IconBtn from '../../IconBtn/IconBtn';
import Modal from '../../Modal';
import s from './SpintBtAddSprint.module.scss';

const SpintBtAddSprint = () => {
  // const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [titleInput, setTitleInput] = useState('');
  const [valueInput, setValueInput] = useState('');

  const Example = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    );
  };

  // useEffect(() => {
  //   dispatch(getProjects());
  // }, [dispatch]);

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  const handleChange = event => {
    const { value } = event.target;
    setTitleInput(value);
  };

  const handleChangeValue = event => {
    const { value } = event.target;
    setValueInput(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // dispatch(addProjects({ title: titleInput, description: descriptionInput }));
    setTitleInput('');

    toggleModal();
  };
  return (
    <>
      <div className={s.conteinerBtnAddSrint} onClick={toggleModal}>
        <IconBtn icon={'add'} className={s.btnSprintAdd} />
        <span className={s.btnSprintAddText}>Создать спринт</span>
      </div>
      {showModal && (
        <Modal closeModal={toggleModal}>
          <h2>Создать спринт</h2>
          <form className="addForm" onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              name="title"
              autoComplete="off"
              autoFocus
              placeholder="Title"
              value={valueInput}
              onChange={handleChange}
            />
            <input
              className="input"
              type="text"
              name="title"
              autoComplete="off"
              autoFocus
              placeholder="Тривалисть"
              value={titleInput}
              onChange={handleChangeValue}
            />
            <input type="checkbox" checked />
            {Example}

            <button className={s.btnCencel} type="button" onClick={toggleModal}>
              готово
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default SpintBtAddSprint;
