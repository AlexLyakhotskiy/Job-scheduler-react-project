import React, { useEffect } from 'react';
import { Link, useRouteMatch, useParams } from 'react-router-dom';
// import IconBtn from '../../components/IconBtn/IconBtn';
import { routes } from '../../routes/routes';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import SpintBtPeople from '../../components/Sprints/SpintBtPeople/SpintBtPeople';
import SprintPageTitele from '../../components/Sprints/SprintPageTitele/SprintPageTitele';
import SprintBtBack from '../../components/Sprints/SprintBtBack/SprintBtBack';
import SprintCard from '../../components/Sprints/SprintCard/SprintCard';
import sprintOperations from '../../redux/sprint/sprin-operations';
import allSelectors from '../../redux/sprint/sprin-selectors';
import SpintBtAddSprint from '../../components/Sprints/SpintBtAddSprint/SpintBtAddSprint';
import SprintPageProject from '../../components/Sprints/SprintPageProject/SprintPageProject';
import s from './SprintsPage.module.scss';

export default function SprintsPage() {
  const { projectId } = useParams();
  const { url } = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sprintOperations.getProject());
  }, [dispatch]);

  const projectIdall = useSelector(state => {
    const project = allSelectors.newProject(state);
    return project.id;
  });

  console.log('projectId: ', projectId);
  return (
    <>
      <h1>SprintsPage</h1>
      <Link to={`${url}/555`}>к таскам</Link>
      {/* <IconBtn icon="add" /> */}
      <Container>
        <div className={s.containerPageSprintProgect}>
          <SprintPageProject />
          <div className={s.containerPageSprint}>
            <div className={s.pageSprintBtBack}>
              <SprintBtBack />
            </div>
            <SprintPageTitele />
            <SpintBtAddSprint />
            <SpintBtPeople />
            {projectIdall && <SprintCard />}
          </div>
        </div>
      </Container>

      <div>
        <Link to={routes.projects}>назад</Link>
      </div>
    </>
  );
}
