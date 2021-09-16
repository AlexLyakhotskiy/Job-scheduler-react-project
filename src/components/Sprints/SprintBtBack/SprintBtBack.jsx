import s from './SprintBtBack.module.scss';

const SprintBtBack = () => {
  return (
    <div className={s.conteinerBtnBack}>
      <svg width="30" height="5" className={s.arrow}>
        <use href="./img/sprite.svg#Arrow"></use>
      </svg>
      <button className={s.btGoBack}>Показати проекти</button>
    </div>
  );
};

export default SprintBtBack;
