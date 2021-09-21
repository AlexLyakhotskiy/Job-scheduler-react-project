import s from './SideBar.module.scss';
import Svg from '../../Svg/Svg';
import { routes } from '../../../routes/routes';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import IconBtn from '../../IconBtn/IconBtn';
import Modal from '../../Modal/Modal';

const SideBar = ({ sprints }) => {
  const { projectId } = useParams();

  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(prev => !prev);
  };

  return (
    <>
      <div className={s.sprintsConteiner}>
        <Link
          to={`${routes.projects}/${projectId}/sprints`}
          className={s.btGoBackLink}
        >
          <button className={s.btGoBack}>
            <Svg icon={'#icon-arrow'} className={s.arrow} />
            <span className={s.btGoBackTitel}>Показати спринти</span>
          </button>
        </Link>
        <ul className={s.sprintsList}>
          {sprints?.length &&
            sprints.map(sprint => (
              <li key={sprint._id} className={s.sprintItem}>
                <Link
                  to={`${routes.projects}/${projectId}/sprints/${sprint._id}`}
                  className={s.sprintLink}
                >
                  <div className={s.sprintWrapper}>
                    <div className={s.sprintBoxColor}></div>
                    <span>{sprint.title}</span>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
        <div className={s.conteinerBtnAddProj}>
          <IconBtn
            icon={'add'}
            className={s.btnProjAdd}
            onClick={toggleModal}
          />
          <span className={s.btnSprintAddText}>Створити спринт</span>
        </div>
      </div>
      {openModal && <Modal closeModal={toggleModal} />}
    </>
  );
};

export default SideBar;
