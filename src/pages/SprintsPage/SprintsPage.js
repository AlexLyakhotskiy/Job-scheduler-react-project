import React from 'react';
import Container from '../../components/Container/Container';
import SpintBtPeople from '../../components/Sprints/SpintBtPeople/SpintBtPeople';
import SprintPageTitele from '../../components/Sprints/SprintPageTitele/SprintPageTitele';
import SprintBtBack from '../../components/Sprints/SprintBtBack/SprintBtBack';
import SprintCard from '../../components/Sprints/SprintCard/SprintCard';
import SpintBtAddSprint from '../../components/Sprints/SpintBtAddSprint/SpintBtAddSprint';
import SprintPageProject from '../../components/Sprints/SprintPageProject/SprintPageProject';
import s from './SprintsPage.module.scss';

export default function SprintsPage() {
  return (
    <>
      <h1>HEADER</h1>
      <Container>
        <div className={s.containerPageSprintProgect}>
          <SprintPageProject />
          <div className={s.containerPageSprint}>
            <div className={s.pageSprintBtBack}>
              <SprintBtBack />
            </div>
            <SprintPageTitele />
            <SpintBtPeople />
            <SprintCard />
          </div>
          <div className={s.btnDispleyNone}>
            <SpintBtAddSprint />
          </div>
        </div>
      </Container>
    </>
  );
}
