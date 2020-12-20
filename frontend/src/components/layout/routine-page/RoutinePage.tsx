import * as React from 'react';
import styled from '@emotion/styled';
import { Navbar } from '../navbar/Navbar';
import { RoutinePanel } from '../routine-panel/RoutinePanel';
import { getRoutines } from '../../../utils/utils';
import { Footer } from '../footer/Footer';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const RoutinePage: React.FC = (): JSX.Element => {
  const [routines, setRoutines] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await getRoutines();
      if (response !== Error) {
        setRoutines(response);
      }
    })();
  }, []);

  return (
    <Container role="application">
      <Navbar />
      <RoutinePanel routines={routines} />
      <Footer position={routines.length === 0 ? 'absolute' : 'fixed'} />
    </Container>
  );
};
