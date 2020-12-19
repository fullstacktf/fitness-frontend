import * as React from 'react';
import styled from '@emotion/styled';
import defaultExercisePicture from './assets/defaultExercisePicture.svg';
import { RoutineExercise } from '../../atomic/routine-exercise/RoutineExercise';
import { JsxEmit } from 'typescript';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0vh 0vh 1.2vh #00000029;
  opacity: 1;
`;

const Panel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 21.9vh;
  margin: 0vh 5vh;
`;

const ExercisesPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RoutinePicture = styled.img`
  border-radius: 50%;
  width: 9.5vh;
  margin: 2vh;
  border: 1px solid #707070;
  opacity: 1;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 64vh;
  height: 80%;
`;

const Name = styled.div`
  text-align: left;
  font: normal normal bold 6.2vh/3vh Inter;
  letter-spacing: 0vh;
  color: #ce3131;
  opacity: 1;
  width: 100%;
  margin: 4vh 4vh;
`;

const Description = styled.div`
  word-wrap: wrap;
  text-align: left;
  font: normal normal bold 1.4vh/3vh Inter;
  letter-spacing: 0vh;
  color: #1b1b1b;
  opacity: 1;
  width: 100%;
  margin: 0vh 4vh;
`;

export interface RoutinePanelProps {
  imageRoute?: string;
  name: string;
  description: string;
  exercises: any[];
}

export const RoutinePanel: React.FC<RoutinePanelProps> = (
  RoutinePanelProps
) => {
  const [isEmpty, setIsEmpty] = React.useState(true);

  const fillExercisesPanel = (): JSX.Element[] => {
    const elements = RoutinePanelProps.exercises.map((exercise) => {
      return (
        <RoutineExercise
          key={exercise.ID}
          imageRoute={defaultExercisePicture}
          name={exercise.BaseExercise.Name}
          reps={exercise.Repetitions}
          series={exercise.Series}
          description={exercise.BaseExercise.Description}
        />
      );
    });
    return elements;
  };

  React.useEffect(() => {
    if (
      RoutinePanelProps.exercises.length !== 0 &&
      RoutinePanelProps.exercises[0].ID !== undefined
    ) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [RoutinePanelProps.exercises]);

  return (
    <Container>
      <Panel>
        <RoutinePicture
          src={RoutinePanelProps.imageRoute}
          alt={RoutinePanelProps.name + 'routine picture'}
        />
        <Content>
          <Name>{RoutinePanelProps.name}</Name>
          <Description>{RoutinePanelProps.description}</Description>
        </Content>
      </Panel>
      <ExercisesPanel>{isEmpty ? '' : fillExercisesPanel()}</ExercisesPanel>
    </Container>
  );
};
