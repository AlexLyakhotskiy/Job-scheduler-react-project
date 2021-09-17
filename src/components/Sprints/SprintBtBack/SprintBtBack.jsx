import Svg from '../../Svg/Svg';
import s from './SprintBtBack.module.scss';

const SprintBtBack = () => {
  return (
    <button className={s.btGoBack}>
      <Svg icon={'#icon-arrow'} className={s.arrow} />
      <span>Показати проекти</span>
    </button>
  );
};

export default SprintBtBack;
