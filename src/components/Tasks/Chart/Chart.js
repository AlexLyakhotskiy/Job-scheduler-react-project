import moment from 'moment';
import { Line } from 'react-chartjs-2';

// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'Актуальні трудовитрати в годинах',
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: 'rgba(75,192,192,0.4)',
//       borderColor: 'rgba(255, 0, 81, 1)',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgba(75,192,192,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [65, 59, 80, 81, 56, 55, 40],
//     },
//     {
//       label: 'Актуальні заплановані трудовитрати в годинах',
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: 'rgba(75,192,192,0.4)',
//       borderColor: 'rgba(0, 0, 123, 1)',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgba(75,192,192,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [55, 66, 89, 86, 58, 50, 47],
//     },
//   ],
// };

const Chart = ({ tasks }) => {
  const getperiodArr = () => {
    const daysArr = tasks[0].hoursWastedPerDay.map(day => day.currentDay);
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
        label: 'Запланований залишок трудовитрат',
        data: getPlanedHoursArr(),
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(255, 0, 81, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
      {
        label: 'Актуальний залишок трудовитрат',
        data: getHoursWastedArr(),
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(0, 0, 123, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
    ],
  };

  return (
    <div>
      <h2>Burndown Chart (Calendar team)</h2>
      <Line data={data} />
    </div>
  );
};

export default Chart;
