import * as React from 'react';
import styled from '@emotion/styled';
import { Exercise } from '../../atomic/exercise/Exercise';
import defaultExercisePicture from './assets/defaultExercisePicture.svg';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1vh;
  grid-row-gap: 1vh;
  background: #f89d9d;
  padding: 4vh;
  margin: 10vh 0vh;
  width: 100vh;
`;

export interface ExercisePanelProps {
  exercises: any[];
}

export const ExercisePanel: React.FC<ExercisePanelProps> = (
  ExercisePanelProps
): JSX.Element => {
  const [isEmpty, setIsEmpty] = React.useState(true);

  const fillExercises = (): JSX.Element[] => {
    const elements: JSX.Element[] = ExercisePanelProps.exercises.map(
      (exercise: any) => {
        return (
          <Exercise
            key={exercise.ID}
            picture={defaultExercisePicture}
            exerciseName={exercise.Name}
            category={exercise.ExerciseCategory.Name}
            id={exercise.ID}
          />
        );
      }
    );
    return elements;
  };

  React.useEffect(() => {
    if (ExercisePanelProps.exercises.length !== 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [ExercisePanelProps]);

  return <Container>{isEmpty ? '' : fillExercises()}</Container>;
};
