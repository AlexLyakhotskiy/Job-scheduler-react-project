import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import IconBtn from '../../IconBtn/IconBtn';
import styles from '../TasksList.module.scss';
import sprintOperations from '../../../redux/sprint/sprin-operations';

const SprintTitle = ({ currentSprint, sprintId }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [openTitleInp, setOpenTitleInp] = useState(false);

  // useEffect(() => {
  //   setTitle(currentSprint.title);
  // }, [currentSprint.title]);

  const toggleInputTitle = () => {
    setOpenTitleInp(prev => !prev);
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(sprintOperations.patchSprint(sprintId, title));
    toggleInputTitle();
  };

  const onChangeTitle = e => {
    const sprintTitle = e.target.value;
    setTitle(sprintTitle);
  };

  return (
    <>
      {!openTitleInp ? (
        <div>
          <h2 className={styles.sprintTitle}>{title}</h2>
          <IconBtn
            onClick={toggleInputTitle}
            icon="pencil"
            secondary
            className={styles.iconPencil}
          />
        </div>
      ) : (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChangeTitle}
            required
          ></input>
          <button type="submit">Edit</button>
        </form>
      )}
    </>
  );
};

export default SprintTitle;
