import { useDispatch, useSelector } from 'react-redux';
import TaskItem from './TaskItem/TaskItem';
import styles from './TasksList.module.scss';
import sprite from './sprite.svg';
import CreateTaskForm from './TaskItem/CreateTaskForm/CreateTaskForm';
import Container from '../Container/Container';
import { useEffect } from 'react';
import { fetchTasks } from '../../redux/tasks/tasks-operations';
import IconBtn from '../IconBtn/IconBtn';

const TasksList = () => {
  const tasks = useSelector(state => state.tasks.allTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  console.log(`tasks`, tasks);

  return (
    <Container>
      <section className={styles.sprintSection}>
        <div className={styles.sideBar}>
          <button type="button">GoBack</button>
        </div>
        <div className={styles.sectionWrapper}>
          <div className={styles.mainBox}>
            <div className={styles.headerWrapper}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sprintTitle}>Sprint title</h2>
                <IconBtn
                  icon="pencil"
                  secondary
                  className={styles.iconPencil}
                />
              </div>
              <IconBtn icon="add" main className={styles.iconPencil} />
            </div>
            <div>
              <CreateTaskForm />
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
          </div>
          <div>
            <ul className={styles.tasksList}>
              {tasks.map(task => (
                <TaskItem task={task} key={task._id} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default TasksList;
