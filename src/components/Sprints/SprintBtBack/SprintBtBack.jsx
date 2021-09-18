import { Link } from 'react-router-dom';
import Svg from '../../Svg/Svg';
import s from './SprintBtBack.module.scss';
import { routes } from '../../../routes/routes';

const SprintBtBack = () => {
  return (
    <Link to={routes.projects} className={s.btGoBackLink}>
      <button className={s.btGoBack}>
        <Svg icon={'#icon-arrow'} className={s.arrow} />
        <span className={s.btGoBackTitel}>Показати проекти</span>
      </button>
    </Link>
  );
};

export default SprintBtBack;
