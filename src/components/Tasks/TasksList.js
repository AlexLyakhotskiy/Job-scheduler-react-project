import { useSelector } from 'react-redux';
import TaskItem from './TaskItem/TaskItem';
import styles from './TasksList.module.scss';
import sprite from './sprite.svg';

const TasksList = () => {
  const tasks = useSelector(state => state.tasks.allTasks);
  return (
    <section className={styles.sprintSection}>
      <div className={styles.sectionWrapper}>
        <div className={styles.headerWrapper}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sprintTitle}>Sprint title</h2>
            <button type="button" className={styles.tasksBtn}>
              <svg className={styles.editIcon}>
                <use href={sprite + '#icon-edit'} />
              </svg>
            </button>
          </div>
          <button type="button" className={styles.tasksBtn}>
            Create task
          </button>
        </div>

        <div className={styles.tableWrapper}>
          <ul className={styles.tableTitleList}>
            <li className={styles.tableTitle}>Задача</li>
            <li className={styles.tableTitle}>
              Заплановано
              <br />
              годин
            </li>
            <li className={styles.tableTitle}>
              Витрачено
              <br />
              год / день
            </li>
            <li className={styles.tableTitle}>
              Витрачено
              <br />
              годин
            </li>
            <li>
              <button type="button" className={styles.tasksBtn}>
                <svg className={styles.findIcon}>
                  <use href={sprite + '#icon-find'} />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <div>
          <ul className={styles.tasksList}>
            {tasks.map(task => (
              <TaskItem task={task} key={task.id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TasksList;
