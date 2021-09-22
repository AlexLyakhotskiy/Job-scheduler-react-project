import s from './TaskItem.module.scss';
import IconBtn from '../../IconBtn/IconBtn';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, editTask } from '../../../redux/tasks/tasks-operations';
import { getCurrentDayIndexSelector } from '../../../redux/tasks/tasks-selectors';

const TaskItem = ({ task }) => {
  const currentDayIndex = useSelector(getCurrentDayIndexSelector);
  const dispatch = useDispatch();

  const onChange = e => {
    e.preventDefault();
    const { value } = e.target;
    if (value > 0) {
      dispatch(
        editTask({
          date:
            currentDayIndex &&
            task.hoursWastedPerDay &&
            task.hoursWastedPerDay[currentDayIndex - 1]
              ? task.hoursWastedPerDay[currentDayIndex - 1].currentDay
              : '',
          hours: value,
          id: task.id,
        }),
      );
    }
  };

  return (
    <li className={s.taskWrapper}>
      <div className={s.taskCard}>
        <div className={s.taskTitle}>
          <span>{task.title}</span>
        </div>
        <div className={s.taskItem}>
          <span className={s.taskItemDesc}>Заплановано годин</span>
          <span>{task.hoursPlanned}</span>
        </div>
        <div className={s.taskItem}>
          <span className={s.taskItemDesc}>Витрачено год / день</span>
          <span>
            <form onSubmit={e => e.preventDefault()} className={s.taskItemForm}>
              <input
                className={s.taskItemInp}
                type="number"
                name="hours"
                value={
                  currentDayIndex &&
                  task.hoursWastedPerDay &&
                  task.hoursWastedPerDay[currentDayIndex - 1]
                    ? task.hoursWastedPerDay[currentDayIndex - 1]
                        .singleHoursWasted
                    : ''
                }
                min="1"
                max="8"
                onChange={onChange}
              />
            </form>
          </span>
        </div>
        <div className={s.taskItem}>
          <span className={s.taskItemDesc}>Витрачено годин</span>
          <span>{task.hoursWasted}</span>
        </div>
        <div className={s.removeBtn}>
          <IconBtn
            icon="bin"
            secondary
            onClick={() => dispatch(deleteTask(task.id || task._id))}
          />
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
