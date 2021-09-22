import s from './Chart.module.scss';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { getCurrentLanguage } from '../../../redux/userSettings/userSettingsSelectors';

const Chart = ({ tasks }) => {
  const curLanguage = useSelector(getCurrentLanguage);

  const getperiodArr = () => {
    const daysArr = tasks[0].hoursWastedPerDay
      .map(day => day.currentDay.slice(5))
      .slice(0, 4);
    const sortedDaysArr = daysArr.sort(
      (a, b) => new Date(b.date) - new Date(a.date),
    );
    sortedDaysArr.unshift(0);
    return sortedDaysArr;
  };

  const hoursPlanedSum = tasks.reduce(
    (acc, task) => acc + Number(task.hoursPlanned),
    0,
  );

  const getPlanedHoursArr = () => {
    const planedHoursArr = [hoursPlanedSum];
    let hours = hoursPlanedSum;
    for (let i = 0; i < tasks[0].hoursWastedPerDay.length; i += 1) {
      hours = hours - hoursPlanedSum / tasks[0].hoursWastedPerDay.length;
      planedHoursArr.push(hours);
    }
    return planedHoursArr;
  };

  const getHoursWastedArr = () => {
    const daysWastedHours = {};
    tasks.forEach(task =>
      task.hoursWastedPerDay.forEach(day => {
        if (daysWastedHours[day.currentDay]) {
          daysWastedHours[day.currentDay] += Number(day.singleHoursWasted);
        } else {
          daysWastedHours[day.currentDay] = Number(day.singleHoursWasted);
        }
      }),
    );
    const daysWastedHoursArr = [hoursPlanedSum];

    Object.values(daysWastedHours).forEach(dayWastedHours => {
      let hours = hoursPlanedSum;
      hours -= dayWastedHours;
      daysWastedHoursArr.push(hours);
    });
    return daysWastedHoursArr;
  };

  const data = {
    labels: getperiodArr(),
    datasets: [
      {
        label: curLanguage.tasks.chart.labelone,
        data: getPlanedHoursArr(),
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(255, 0, 81, 1)',
        borderColor: 'rgba(255, 0, 81, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 1,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(255, 0, 81, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 5,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: 'rgba(255, 0, 81, 1)',
        pointHoverBorderColor: 'rgba(255, 0, 81, 1)',
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        min: 0,
      },
      {
        label: curLanguage.tasks.chart.labeltwo,
        data: getHoursWastedArr(),
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(0, 0, 123, 1)',
        borderColor: 'rgba(0, 0, 123, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(0, 0, 123, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 5,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: 'rgba(0, 0, 123, 1)',
        pointHoverBorderColor: 'rgba(0, 0, 123, 1)',
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        min: 0,
      },
    ],
  };

  return (
    <div className={s.scrol}>
      <div className={s.charContainer}>
        <h2 className={s.charTitle}>Burndown Chart (Calendar team)</h2>
        <Line data={data} />
      </div>
    </div>
  );
};

export default Chart;
