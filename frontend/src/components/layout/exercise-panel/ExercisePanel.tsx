import * as React from 'react';
import styled from '@emotion/styled';
import { Exercise } from '../../atomic/exercise/Exercise';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  background-color: #ce3131;
  padding: 4vh;
  margin: 10vh 0vh;
  width: 100vh;
`;

export const ExercisePanel: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Exercise
        picture=""
        exerciseName="Weight Loss"
        category="Category"
        videoUrl="youtube.com/asdfasdf"
      />
      <Exercise
        picture=""
        exerciseName="Weight Loss"
        category="Category"
        videoUrl="youtube.com/asdfasdf"
      />
      <Exercise
        picture=""
        exerciseName="Weight Loss"
        category="Category"
        videoUrl="youtube.com/asdfasdf"
      />
      <Exercise
        picture=""
        exerciseName="Weight Loss"
        category="Category"
        videoUrl="youtube.com/asdfasdf"
      />
      <Exercise
        picture=""
        exerciseName="Weight Loss"
        category="Category"
        videoUrl="youtube.com/asdfasdf"
      />
      <Exercise
        picture=""
        exerciseName="Weight Loss"
        category="Category"
        videoUrl="youtube.com/asdfasdf"
      />
    </Container>
  );
};
