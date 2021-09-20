import Svg from '../../Svg/Svg';
import s from './SpintBtPeople.module.scss';

const SpintBtPeople = () => {
  //  открывать модалку с добавлением людей + запрос на сервер
  return (
    <div className={s.conteinerPeopleAdd}>
      <button className={s.btnPeopleAdd}>
        <Svg icon={'#icon-add-people'} className={s.iconPeopleAdd} />
        Додати людей
      </button>
    </div>
  );
};

export default SpintBtPeople;
