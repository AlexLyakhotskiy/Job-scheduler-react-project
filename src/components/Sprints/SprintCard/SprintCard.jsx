import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprintOperations from '../../../redux/sprint/sprin-operations';
import allSelectors from '../../../redux/sprint/sprin-selectors';
import s from './SprintCard.module.scss';

const SprintCard = () => {
  const idProject = useSelector(state => {
    const project = allSelectors.newProject(state);
    return project.id;
  });

  const sprints = useSelector(state => {
    return allSelectors.allSprints(state).sprints;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sprintOperations.getSprint(idProject));
  }, []);

  return (
    <div>
      <ul className={s.sprintCardList}>
        {sprints?.length > 0 &&
          sprints?.map(sprint => (
            <li key={sprint._id} className={s.sprintCard}>
              <div>
                <h2 className={s.sprintTitel}>{sprint.title}</h2>
                <ul>
                  <li className={s.sprintItem}>
                    <span>Дата початку</span>
                    <span>{sprint.startDate}</span>
                  </li>
                  <li className={s.sprintItem}>
                    <span>Дата закінченя</span>
                    <span>{sprint.endDate}</span>
                  </li>
                  <li className={s.sprintItem}>
                    <span>Тривалість</span>
                    <span>{sprint.duration}</span>
                  </li>
                </ul>

                <button className={s.sprintDelBt}>к</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SprintCard;
