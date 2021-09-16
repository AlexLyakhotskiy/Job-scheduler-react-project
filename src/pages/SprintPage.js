import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Container/Container';
import SpintBtPeople from '../components/Sprints/SpintBtPeople/SpintBtPeople';
import SprintPageTitele from '../components/Sprints/SprintPageTitele/SprintPageTitele';
import SprintBtBack from '../components/Sprints/SprintBtBack/SprintBtBack';
import SprintCard from '../components/Sprints/SprintCard/SprintCard';
import sprintOperations from '../redux/sprint/sprin-operations';
import allSelectors from '../redux/sprint/sprin-selectors';
import SpintBtAddSprint from '../components/Sprints/SpintBtAddSprint/SpintBtAddSprint';

export default function SprintPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sprintOperations.getProject());
  }, [dispatch]);

  const projectId = useSelector(state => {
    const project = allSelectors.newProject(state);
    return project.id;
  });

  return (
    <>
      <div>heder</div>

      <Container className="styles.Container">
        <SprintBtBack />
        <SprintPageTitele />
        <SpintBtAddSprint />
        <SpintBtPeople />
        {projectId && <SprintCard />}
      </Container>
    </>
  );
}
