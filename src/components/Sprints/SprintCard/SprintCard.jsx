import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useRouteMatch, useParams } from 'react-router-dom';
import sprintOperations from '../../../redux/sprint/sprin-operations';
import allSelectors from '../../../redux/sprint/sprin-selectors';
import IconBtn from '../../IconBtn/IconBtn';
import moment from 'moment';
import s from './SprintCard.module.scss';
import { getCurrentLanguage } from '../../../redux/userSettings/userSettingsSelectors';

const SprintCard = () => {
  const { url } = useRouteMatch();
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const curLanguage = useSelector(getCurrentLanguage);

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
        <h1>{curLanguage.sprints.message}</h1>
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
                          <span className={s.sprintText}>
                            {curLanguage.sprints.addSprintsForm.startDate}
                          </span>
                          <span>
                            {moment(sprint.startDate).format('D MMM')}
                          </span>
                        </li>
                        <li className={s.sprintItem}>
                          <span className={s.sprintText}>
                            {curLanguage.sprints.addSprintsForm.endDate}
                          </span>
                          <span>{moment(sprint.endDate).format('D MMM')}</span>
                        </li>
                        <li className={s.sprintItem}>
                          <span className={s.sprintText}>
                            {curLanguage.sprints.addSprintsForm.duration}
                          </span>
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
