import * as React from 'react';
import styled from '@emotion/styled';
import { Navbar } from '../navbar/Navbar';
import { ExercisePanel } from '../exercise-panel/ExercisePanel';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const ExercisePage: React.FC = (): JSX.Element => {
  return (
    <Container role="application">
      <Navbar />
      <ExercisePanel />
    </Container>
  );
};
