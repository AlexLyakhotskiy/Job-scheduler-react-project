import { useDispatch, useSelector } from 'react-redux';
import TaskItem from './TaskItem/TaskItem';
import styles from './Tasks.module.scss';
import { useEffect, useState } from 'react';
import { addTask, fetchTasks } from '../../redux/tasks/tasks-operations';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import IconBtn from '../IconBtn/IconBtn';
import {
  getFilterTasksSelector,
  getLoadingSelector,
  getTasksSelector,
} from '../../redux/tasks/tasks-selectors';
import Modal from '../Modal/Modal';
import SprintTitle from './SprintTitle/SprintTitle';
import Chart from './Chart/Chart';
import { useParams } from 'react-router';
import SprintPagination from './SprintPagination/SprintPagination';
import SideBar from './SideBar/SideBar';
import TableHeader from './TableHeader/TableHeader';
import sprintOperations from '../../redux/sprint/sprin-operations';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

// const initialState = {
//   title: '',
//   hoursPlanned: '',
// };

const Tasks = () => {
  const tasks = useSelector(getTasksSelector);
  const isLoadingTasks = useSelector(getLoadingSelector);
  const isLoadingSprints = useSelector(state => state.sprints.isLoading);
  const filteredTasks = useSelector(getFilterTasksSelector);
  const sprints = useSelector(state => state.sprints.items);

  const { sprintId, projectId } = useParams();
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    dispatch(sprintOperations.getSprint(projectId));
    dispatch(fetchTasks(sprintId));
  }, [sprintId, projectId]);

  const toggleChart = () => {
    if (tasks.length > 2) {
      setShowChart(prev => !prev);
    }
  };

  const toggleModal = () => {
    setOpenModal(prev => !prev);
  };

  return (
    <section className={styles.sprintSection}>
      {isLoadingSprints && isLoadingTasks ? (
        <LoaderSpinner />
      ) : (
        <>
          <div className={styles.sideBar}>
            <SideBar sprints={sprints} />
          </div>
          <div className={styles.sectionWrapper}>
            <div className={styles.mainBox}>
              <div className={styles.headerWrapper}>
                {tasks.length > 0 && <SprintPagination tasks={tasks} />}
                <div className={styles.sectionHeader}>
                  <SprintTitle sprints={sprints} sprintId={sprintId} />
                </div>
                <IconBtn
                  onClick={toggleModal}
                  icon="add"
                  main
                  className={styles.iconPencil}
                />
              </div>
            </div>
            <TableHeader />
            <div>
              {isLoadingTasks ? (
                <LoaderSpinner />
              ) : tasks.length !== 0 ? (
                <ul className={styles.tasksList}>
                  {filteredTasks.map(task => (
                    <TaskItem task={task} key={task.id || task._id} />
                  ))}
                </ul>
              ) : (
                <h2>
                  Ваш спринт не має задач. Скористайтеся кнопкою "Створити
                  задачу". Для появи аналітики вам треба додати мінімум 3
                  завдання
                </h2>
              )}
            </div>
            {!showChart ? (
              tasks.length > 2 && (
                <IconBtn icon="chart" main onClick={toggleChart} />
              )
            ) : (
              <Modal closeModal={toggleChart} chart>
                <Chart tasks={tasks} />
              </Modal>
            )}
          </div>
        </>
      )}
      {openModal && (
        <Modal closeModal={toggleModal}>
          <AddTaskForm toggleModal={toggleModal} sprintId={sprintId} />
        </Modal>
      )}
    </section>
  );
};

export default Tasks;
