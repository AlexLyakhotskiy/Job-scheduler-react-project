import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { filterChange } from '../../../redux/tasks/tasks-actions';
import sprite from '../sprite.svg';
import styles from '../TasksList.module.scss';

const FindForm = ({ toggleFindInput }) => {
  const dispatch = useDispatch();
  const textInput = useRef(null);

  const onSubmit = e => {
    e.preventDefault();
    toggleFindInput();
    dispatch(filterChange(textInput.current.value));
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          ref={textInput}
          type="name"
          name="name"
          label="Find task by name"
          required
          placeholder="Search task"
        />

        <button type="submit" className={styles.tasksBtn} onClick={onSubmit}>
          <svg className={styles.findIcon}>
            <use href={sprite + '#icon-find'} />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default FindForm;
