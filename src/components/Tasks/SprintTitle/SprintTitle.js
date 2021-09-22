import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import IconBtn from '../../IconBtn/IconBtn';
import sprintOperations from '../../../redux/sprint/sprin-operations';
import { useParams } from 'react-router';
import s from './SprintTitle.module.scss';

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
    <div className={s.titleBox}>
      {!openTitleInp ? (
        <div className={s.sprintTitleWrapper}>
          <h2 className={s.sprintTitle}>{title}</h2>
          <IconBtn onClick={toggleInputTitle} icon="pencil" secondary />
        </div>
      ) : (
        <form onSubmit={onSubmit} className={s.editForm}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChangeTitle}
            required
            className={s.editInp}
          ></input>
          <IconBtn type="submit" icon="pencil" secondary />
        </form>
      )}
    </div>
  );
};

export default SprintTitle;
