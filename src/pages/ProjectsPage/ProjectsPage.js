import React from 'react';

import Container from '../../components/Container/Container.jsx';
import Projects from '../../components/Projects/Projects';

export default function ProjectsPage() {
  return (
    <>
      <Container>
        <Projects />

        {/* этот линк обернуть лишкой */}
        {/* <Link to={`${path}/${id}`}>к спринтам</Link> */}
      </Container>
    </>
  );
}
