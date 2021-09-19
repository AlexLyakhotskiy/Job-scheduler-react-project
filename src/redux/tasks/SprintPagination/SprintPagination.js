import { useState } from 'react';

const SprintPagination = ({ tasks }) => {
  const [dayNumber, setDayNumber] = useState(1);
  console.log(`tasks`, tasks);
  const duration = tasks[0].hoursWastedPerDay.length;

  const onChangeNext = e => {
    e.preventDefault();
    if (dayNumber >= duration) return;
    setDayNumber(prev => prev + 1);
  };
  const onChangePrev = e => {
    e.preventDefault();
    if (dayNumber <= 1) return;
    setDayNumber(prev => prev - 1);
  };

  return (
    <div>
      <button onClick={onChangePrev} type="button">
        {'<'}
      </button>
      <p>
        <span>{dayNumber}</span>/<span>{duration}</span>
      </p>
      <button onClick={onChangeNext} type="button">
        {'>'}
      </button>
      <p>10.09.2021</p>
    </div>
  );
};

export default SprintPagination;
