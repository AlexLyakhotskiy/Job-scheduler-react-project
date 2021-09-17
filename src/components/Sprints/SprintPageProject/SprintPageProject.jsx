// import { useSelector } from 'react-redux';
// import allSelectors from '../../../redux/sprint/sprin-selectors';
import SprintBtBack from '../SprintBtBack/SprintBtBack';
import s from './SprintPageProject.module.scss';

const SprintPageProject = () => {
  //  открывать модалку с добавлением людей + запрос на сервер

  return (
    <div className={s.sprintProjectConteiner}>
      <SprintBtBack />
      <ul>
        <li>
          <span>Проект</span>
        </li>
      </ul>
      <div>
        <button>button</button>
      </div>
    </div>
  );
};

export default SprintPageProject;
