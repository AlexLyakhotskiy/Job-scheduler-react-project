import { Link, useRouteMatch } from 'react-router-dom';
import s from '../ProjectItem/ProjectItem.module.css';

const colors = ['#8C72DF', '#FF765F', '#71DF87'];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const ProjectItem = ({ title, id, description }) => {
  const { path } = useRouteMatch();
  return (
    <li
      className={s.item}
      style={{
        backgroundColor: colors[randomIntegerFromInterval(0, 2)],
      }}
    >
      <Link to={`${path}/${id}}`} className={s.link}>
        <div className={s.itemWrapper}>
          <h2 className={s.projectTitle}>{title}</h2>
          <p className={s.projectDescription}>{description}</p>
          <button className={s.itemDeleteBtn} type="button" onClick={() => {}}>
            Delete
          </button>
        </div>
      </Link>
    </li>
  );
};

export default ProjectItem;
