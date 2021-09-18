import { Link, useRouteMatch } from 'react-router-dom';
//import IconBtn from '../IconBtn/IconBtn';

import Svg from '../Svg/Svg';
import s from '../ProjectItem/ProjectItem.module.scss';

const ProjectItem = ({ title, id, description }) => {
  const { path } = useRouteMatch();
  return (
    <li className={s.item}>
      <Link to={`${path}/${id}/sprints`} className={s.link}>
        <div className={s.itemWrapper}>
          <h2 className={s.projectTitle}>{title}</h2>
          <p className={s.projectDescription}>{description}</p>
          <button className={s.itemDeleteBtn} type="button" onClick={() => {}}>
            <Svg icon="#icon-bin" className={s.deleteIcon} />
          </button>
        </div>
      </Link>
    </li>
  );
};

export default ProjectItem;
