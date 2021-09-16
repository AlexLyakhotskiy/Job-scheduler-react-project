import s from './SpintBtPeople.module.scss';

const SpintBtPeople = () => {
  //  открывать модалку с добавлением людей + запрос на сервер

  return (
    <div className={s.conteinerPeopleAdd}>
      <svg width="20" height="20" className={s.iconPeopleAdd}>
        <use href="./img/sprite.svg#icon-add-people"></use>
      </svg>
      <button className={s.btnPeopleAdd}>Додати людей</button>
    </div>
  );
};

export default SpintBtPeople;
