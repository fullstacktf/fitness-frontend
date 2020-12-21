import * as React from 'react';
import styled from '@emotion/styled';
import { Navbar } from '../navbar/Navbar';
import { ExercisePanel } from '../exercise-panel/ExercisePanel';
import { getExercises } from '../../../utils/utils';
import { Footer } from '../footer/Footer';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const ExercisePage: React.FC = (): JSX.Element => {
  const [exercises, setExercises] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await getExercises();
      if (response !== Error) {
        setExercises(response);
      }
    })();
  }, []);

  return (
    <Container role="application">
      <Navbar />
      <ExercisePanel exercises={exercises} />
      <Footer position={exercises.length === 0 ? 'absolute' : 'relative'} />
    </Container>
  );
};
