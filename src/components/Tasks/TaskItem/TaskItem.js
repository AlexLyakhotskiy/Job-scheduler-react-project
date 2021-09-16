import styles from './TaskItem.module.scss';
import sprite from '../sprite.svg';

const TaskItem = ({ task }) => {
  console.log(`task`, task.title);
  return (
    <li className={styles.taskItem}>
      <ul className={styles.taskItemBox}>
        <li className={styles.taskColomn}>{task.title}</li>
        <li className={styles.taskColomn}>{task.hoursPlanned}</li>
        <li className={styles.taskColomn}>{task.hoursWasted}</li>
        <li className={styles.taskColomn}>{task.hoursWasted}</li>
        <li className={styles.taskColomn}>
          <button type="button" className={styles.taskBtn}>
            <svg className={styles.deleteIcon}>
              <use href={sprite + '#icon-delete'} />
            </svg>
          </button>
        </li>
      </ul>
    </li>
  );
};

export default TaskItem;
