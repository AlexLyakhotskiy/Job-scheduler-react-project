import { useDispatch, useSelector } from 'react-redux';
import TaskItem from './TaskItem/TaskItem';
import styles from './TasksList.module.scss';
import sprite from './sprite.svg';
import Container from '../Container/Container';
import { useEffect, useState } from 'react';
import { addTask, fetchTasks } from '../../redux/tasks/tasks-operations';
import IconBtn from '../IconBtn/IconBtn';
import {
  getFilterTasksSelector,
  getTasksSelector,
} from '../../redux/tasks/tasks-selectors';
import Modal from '../Modal/Modal';
import SprintTitle from './SprintTitle/SprintTitle';
import FindForm from './FindForm/FindForm';
import Chart from './Chart/Chart';
import { useParams } from 'react-router';
import SprintPagination from '../../redux/tasks/SprintPagination/SprintPagination';

const initialState = {
  title: '',
  hoursPlanned: '',
};

const TasksList = () => {
  const tasks = useSelector(getTasksSelector);
  const dispatch = useDispatch();
  const filteredTasks = useSelector(getFilterTasksSelector);
  const sprints = useSelector(state => state.sprints.items);
  const [task, setTask] = useState({ ...initialState });

  const { sprintId } = useParams();

  const [openFindInp, setOpenFindInp] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    dispatch(fetchTasks(sprintId));
  }, [dispatch, sprintId]);

  const getCurrentSprint = () =>
    sprints.find(sprint => sprint?._id === sprintId);

  const toggleChart = () => {
    if (tasks.length > 2) {
      setShowChart(prev => !prev);
    }
  };

  const toggleModal = () => {
    setOpenModal(prev => !prev);
  };

  const toggleFindInput = () => {
    setOpenFindInp(prev => !prev);
  };

  const onHandleChange = e => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(
      addTask({
        title: task.title,
        hoursPlanned: task.hoursPlanned,
        sprintId: sprintId,
      }),
    );
    toggleModal();
    setTask({
      title: '',
      hoursPlanned: '',
    });
  };

  return (
    <Container>
      <section className={styles.sprintSection}>
        <div className={styles.sideBar}>
          <button type="button">GoBack</button>
        </div>
        <div className={styles.sectionWrapper}>
          <div className={styles.mainBox}>
            <div className={styles.headerWrapper}>
              {tasks.length > 0 && <SprintPagination tasks={tasks} />}
              <div className={styles.sectionHeader}>
                <SprintTitle
                  currentSprint={getCurrentSprint()}
                  sprintId={sprintId}
                />
              </div>
              <IconBtn
                onClick={toggleModal}
                icon="add"
                main
                className={styles.iconPencil}
              />
            </div>
            {openModal && (
              <Modal closeModal={toggleModal}>
                <h2>Створення задачі</h2>
                <form className={styles.addForm} onSubmit={onSubmit}>
                  <input
                    className={styles.formInp}
                    type="text"
                    name="title"
                    value={task.title}
                    onChange={onHandleChange}
                    required
                  ></input>
                  <input
                    className={styles.formInp}
                    type="number"
                    name="hoursPlanned"
                    value={task.hoursPlanned}
                    onChange={onHandleChange}
                    required
                  ></input>
                  <button className={styles.formSaveBtn} type="submit">
                    Готово
                  </button>
                  <button
                    className={styles.formCancelBtn}
                    onClick={toggleModal}
                  >
                    Відміна
                  </button>
                </form>
              </Modal>
            )}

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
                  {!openFindInp ? (
                    <button
                      type="button"
                      className={styles.tasksBtn}
                      onClick={toggleFindInput}
                    >
                      <svg className={styles.findIcon}>
                        <use href={sprite + '#icon-find'} />
                      </svg>
                    </button>
                  ) : (
                    <FindForm toggleFindInput={toggleFindInput} />
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div>
            {tasks.length === 0 ? (
              <h2>
                Ваш спринт не має задач. Скористайтеся кнопкою "Створити
                задачу". Для появи аналітики вам треба додати мінімум 3 завдання
              </h2>
            ) : (
              <ul className={styles.tasksList}>
                {filteredTasks.map(task => (
                  <TaskItem task={task} key={task.id || task._id} />
                ))}
              </ul>
            )}
          </div>
          {!showChart ? (
            <IconBtn icon="chart" main onClick={toggleChart} />
          ) : (
            <Modal closeModal={toggleChart} chart>
              <Chart />
            </Modal>
          )}
        </div>
      </section>
    </Container>
  );
};

export default TasksList;
