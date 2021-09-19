import styles from './TaskItem.module.scss';
import IconBtn from '../../IconBtn/IconBtn';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, editTask } from '../../../redux/tasks/tasks-operations';
import moment from 'moment';
import { useState } from 'react';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState({
    date: `${moment().format('YYYY-MM-DD')}`,
    hours: task.hoursWastedPerDay[0].singleHoursWasted,
    id: task._id,
  });

  console.log(`task`, task);
  console.log(`singleHoursWasted`, task.hoursWastedPerDay[0].singleHoursWasted);

  const onChange = e => {
    const { value } = e.target;
    setNewTask({ ...newTask, hours: value });
  };
  const onSubmit = e => {
    e.preventDefault();
    if (newTask.hours > 0) {
      dispatch(
        editTask({
          date: newTask.date,
          hours: newTask.hours,
          id: newTask.id,
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
          <form onSubmit={onSubmit}>
            <input
              className={styles.hoursWasted}
              type="number"
              name="hours"
              value={newTask.hours}
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
