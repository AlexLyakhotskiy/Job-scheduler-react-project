import styles from './TaskItem.module.scss';
import IconBtn from '../../IconBtn/IconBtn';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../../redux/tasks/tasks-operations';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  console.log(`task._id`, task._id);
  return (
    <li className={styles.taskItem}>
      <ul className={styles.taskItemBox}>
        <li className={styles.taskColomn}>{task.title}</li>
        <li className={styles.taskColomn}>{task.hoursPlanned}</li>
        <li className={styles.taskColomn}>{task.hoursWasted}</li>
        <li className={styles.taskColomn}>{task.hoursWasted}</li>
        <li className={styles.taskColomn}>
          <IconBtn
            icon="bin"
            secondary
            onClick={dispatch(deleteTask(task._id))}
          />
        </li>
      </ul>
    </li>
  );
};

export default TaskItem;
