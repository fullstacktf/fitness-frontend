import * as React from 'react';
import styled from '@emotion/styled';
import { Navbar } from '../navbar/Navbar';
import { RoutinePanel } from '../routine-panel/RoutinePanel';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const RoutinePage: React.FC = (): JSX.Element => {
  return (
    <Container role="application">
      <Navbar />
      <RoutinePanel />
    </Container>
  );
};
