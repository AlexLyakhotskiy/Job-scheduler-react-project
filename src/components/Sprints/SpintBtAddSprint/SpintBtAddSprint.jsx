import IconBtn from '../../IconBtn/IconBtn';
import s from './SpintBtAddSprint.module.scss';

const SpintBtAddSprint = () => {
  //  открывать модалку с создвнием + запрос на сервер

  return (
    <div>
      <IconBtn icon={'add'} className={s.btnSprintAdd} />
      <span className={s.btnSprintAddText}>Создать спринт</span>
    </div>
  );
};

export default SpintBtAddSprint;
