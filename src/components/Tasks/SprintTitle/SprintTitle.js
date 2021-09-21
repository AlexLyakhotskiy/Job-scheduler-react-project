import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import IconBtn from '../../IconBtn/IconBtn';
import styles from '../Tasks.module.scss';
import sprintOperations from '../../../redux/sprint/sprin-operations';
import { useParams } from 'react-router';

const SprintTitle = ({ sprints }) => {
  const dispatch = useDispatch();
  const { sprintId } = useParams();
  const [title, setTitle] = useState('');
  const [openTitleInp, setOpenTitleInp] = useState(false);

  const currentSprint = sprints
    ? sprints.find(sprint => sprint._id === sprintId)
    : '';

  useEffect(() => {
    setTitle(currentSprint.title);
  }, [currentSprint.title]);

  const toggleInputTitle = () => {
    setOpenTitleInp(prev => !prev);
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(sprintOperations.patchSprint({ id: sprintId, title: title }));
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
