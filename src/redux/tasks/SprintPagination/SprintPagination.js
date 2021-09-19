import { useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentDayIndexSelector } from '../tasks-selectors';
import { changeIndexCurrentDay } from '../tasks-actions';

const SprintPagination = ({ tasks }) => {
  const currentDayIndex = useSelector(getCurrentDayIndexSelector);
  const dispatch = useDispatch();

  const duration = tasks[0].hoursWastedPerDay.length;

  const findCurrentDay = () => {
    const currentDay = moment().format('YYYY-MM-DD');
    const day = tasks[0].hoursWastedPerDay.findIndex(
      day => day.currentDay === currentDay,
    );
    if (day >= 0) return day;
    return duration - 1;
  };

  useEffect(() => {
    dispatch(changeIndexCurrentDay(findCurrentDay() + 1));
  }, [dispatch]);

  const currentDate = currentDayIndex
    ? tasks[0].hoursWastedPerDay[currentDayIndex - 1].currentDay
    : '';

  const onChangeNext = e => {
    e.preventDefault();
    if (currentDayIndex >= duration) return;
    dispatch(changeIndexCurrentDay(currentDayIndex + 1));
  };
  const onChangePrev = e => {
    e.preventDefault();
    if (currentDayIndex <= 1) return;
    dispatch(changeIndexCurrentDay(currentDayIndex - 1));
  };

  return (
    <div>
      <button onClick={onChangePrev} type="button">
        {'<'}
      </button>
      <p>
        <span>{currentDayIndex}</span>/<span>{duration}</span>
      </p>
      <button onClick={onChangeNext} type="button">
        {'>'}
      </button>
      <p>{currentDate}</p>
    </div>
  );
};

export default SprintPagination;
