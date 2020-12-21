import * as React from 'react';
import styled from '@emotion/styled';
import { Navbar } from '../navbar/Navbar';
import { ExercisePanel } from '../exercise-panel/ExercisePanel';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';
import { getExercises } from '../../../utils/utils';
import { Footer } from '../footer/Footer';

const Container = styled.div`
  ${tw`flex justify-center items-center flex-col w-full`};
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
