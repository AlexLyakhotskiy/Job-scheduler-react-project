import { useSelector } from 'react-redux';
import allSelectors from '../../../redux/sprint/sprin-selectors';
import IconBtn from '../../IconBtn/IconBtn';
import s from './SprintPageTitele.module.scss';

const SprintPageTitele = () => {
  const project = useSelector(state => {
    return allSelectors.newProject(state);
  });

  return (
    <div className={s.btnConteinerTitel}>
      <div className={s.btnConteiner}>
        <h1 className={s.title}>{project.title}</h1>
        <IconBtn icon={'pencil'} secondary />
      </div>
      {project.description && (
        <p className={s.btnDescription}>{project.description}</p>
      )}
    </div>
  );
};

export default SprintPageTitele;
