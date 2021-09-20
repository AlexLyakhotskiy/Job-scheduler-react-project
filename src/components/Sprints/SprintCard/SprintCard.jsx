import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch, useParams } from 'react-router-dom';
import sprintOperations from '../../../redux/sprint/sprin-operations';
import allSelectors from '../../../redux/sprint/sprin-selectors';
import IconBtn from '../../IconBtn/IconBtn';
import s from './SprintCard.module.scss';

const SprintCard = () => {
  const { url } = useRouteMatch();
  const { projectId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sprintOperations.getSprint(projectId));
  }, [dispatch, projectId]);

  const sprints = useSelector(state => {
    return allSelectors.allSprints(state);
  });

  const deleteSprint = id => dispatch(sprintOperations.delSprint(id));

  return (
    <>
      {!sprints ? (
        <h1> Пока у вас нет спринтов</h1>
      ) : (
        <div>
          <ul className={s.sprintCardList}>
            {sprints?.length > 0 &&
              sprints.map(sprint => (
                <li key={sprint._id} className={s.sprintCardItem}>
                  <Link
                    to={`${url}/${sprint._id}`}
                    className={s.sprintCardLink}
                  >
                    <div className={s.sprintCard}>
                      <h2 className={s.sprintTitel}>{sprint.title}</h2>
                      <ul>
                        <li className={s.sprintItem}>
                          <span className={s.sprintText}>Дата початку</span>
                          <span>{sprint.startDate}</span>
                        </li>
                        <li className={s.sprintItem}>
                          <span className={s.sprintText}>Дата закінченя</span>
                          <span>{sprint.endDate}</span>
                        </li>
                        <li className={s.sprintItem}>
                          <span className={s.sprintText}>Тривалість</span>
                          <span>{sprint.duration}</span>
                        </li>
                      </ul>
                    </div>
                  </Link>
                  <div className={s.sprintDelBt}>
                    <IconBtn
                      icon={'bin'}
                      secondary
                      onClick={() => deleteSprint(sprint._id)}
                    />
                  </div>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SprintCard;
