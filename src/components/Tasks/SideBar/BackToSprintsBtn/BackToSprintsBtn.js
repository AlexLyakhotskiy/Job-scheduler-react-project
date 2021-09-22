import { Link, useParams } from 'react-router-dom';
import s from '../SideBar.module.scss';
import { routes } from '../../../../routes/routes';
import Svg from '../../../Svg/Svg';

const BackToSprintsBtn = () => {
  const { projectId } = useParams();
  return (
    <Link
      to={`${routes.projects}/${projectId}/sprints`}
      className={s.btGoBackLink}
    >
      <button className={s.btGoBack}>
        <Svg icon={'#icon-arrow'} className={s.arrow} />
        <span className={s.btGoBackTitel}>Показати спринти</span>
      </button>
    </Link>
  );
};

export default BackToSprintsBtn;
