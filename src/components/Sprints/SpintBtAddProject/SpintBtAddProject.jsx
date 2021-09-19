import IconBtn from '../../IconBtn/IconBtn';
import s from './SpintBtAddProject.module.scss';

const SpintBtAddProject = () => {
  //  открывать модалку с создвнием + запрос на сервер

  return (
    <div className={s.conteinerBtnAddProj}>
      <IconBtn icon={'add'} className={s.btnProjAdd} />
      <span className={s.btnSprintAddText}>Створити проект</span>
    </div>
  );
};

export default SpintBtAddProject;
