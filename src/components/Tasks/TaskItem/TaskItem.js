import styles from './TaskItem.module.scss';
import IconBtn from '../../IconBtn/IconBtn';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, editTask } from '../../../redux/tasks/tasks-operations';
import { getCurrentDayIndexSelector } from '../../../redux/tasks/tasks-selectors';

const TaskItem = ({ task }) => {
  const currentDayIndex = useSelector(getCurrentDayIndexSelector);
  const dispatch = useDispatch();

  const onChange = e => {
    const { value } = e.target;
    if (value > 0) {
      dispatch(
        editTask({
          date: currentDayIndex
            ? task.hoursWastedPerDay[currentDayIndex - 1].currentDay
            : '',
          hours: value,
          id: task._id || task.id,
        }),
      );
    }
  };

  return (
    <li className={styles.taskItem}>
      <ul className={styles.taskItemBox}>
        <li className={styles.taskColomn}>{task.title}</li>
        <li className={styles.taskColomn}>{task.hoursPlanned}</li>
        <li className={styles.taskColomn}>
          <form onSubmit={e => e.preventDefault()}>
            <input
              className={styles.hoursWasted}
              type="number"
              name="hours"
              value={
                currentDayIndex
                  ? task.hoursWastedPerDay[currentDayIndex - 1]
                      .singleHoursWasted
                  : ''
              }
              max="12"
              onChange={onChange}
            />
          </form>
        </li>
        <li className={styles.taskColomn}>{task.hoursWasted}</li>
        <li className={styles.taskColomn}>
          <IconBtn
            icon="bin"
            secondary
            onClick={() => dispatch(deleteTask(task.id || task._id))}
          />
        </li>
      </ul>
    </li>
  );
};

export default TaskItem;
