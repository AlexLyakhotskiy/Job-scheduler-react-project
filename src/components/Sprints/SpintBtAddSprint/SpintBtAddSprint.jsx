import s from './SpintBtAddSprint.module.scss';

const SpintBtAddSprint = () => {
  //  открывать модалку с создвнием + запрос на сервер

  return (
    <div>
      <button className={s.btnSprintAdd}>+</button>
      <span className={s.btnSprintAddText}>Создать спринт</span>
    </div>
  );
};

export default SpintBtAddSprint;
