import * as React from 'react';
import styled from '@emotion/styled';
import defaultExercisePicture from './assets/defaultExercisePicture.svg';
import { RoutineExercise } from '../../atomic/routine-exercise/RoutineExercise';
import { HashLink } from 'react-router-hash-link';

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
  a {
    text-align: left;
    font: normal normal bold 6.2vh/3vh Inter;
    letter-spacing: 0vh;
    color: #ce3131;
    opacity: 1;
    width: 100%;
    margin: 4vh 4vh;
    text-decoration: none;
  }
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

export interface UserRoutinePanelProps {
  id: string;
  imageRoute?: string;
  name: string;
  description: string;
  exercises: any[];
}

export const UserRoutinePanel: React.FC<UserRoutinePanelProps> = (
  UserRoutinePanelProps
) => {
  const [isRoutineEmpty, setIsRoutineEmpty] = React.useState(true);

  const fillExercisesPanel = (): JSX.Element[] => {
    const elements = UserRoutinePanelProps.exercises.map((exercise) => {
      return (
        <RoutineExercise
          key={exercise.ID}
          imageRoute={defaultExercisePicture}
          name={exercise.BaseExercise.Name}
          reps={exercise.Repetitions}
          series={exercise.Series}
          description={exercise.BaseExercise.Description}
          id={exercise.ID}
        />
      );
    });
    return elements;
  };

  const fillRoutineInformation = (): JSX.Element => {
    return (
      <Panel>
        <RoutinePicture
          src={UserRoutinePanelProps.imageRoute}
          alt={UserRoutinePanelProps.name + 'routine picture'}
        />
        <Content>
          <HashLink to={'/routine/' + UserRoutinePanelProps.id}>
            {UserRoutinePanelProps.name ?? 'No Routine Assigned'}
          </HashLink>
          <Description>{UserRoutinePanelProps.description}</Description>
        </Content>
      </Panel>
    );
  };

  React.useEffect(() => {
    if (
      UserRoutinePanelProps.exercises.length !== 0 &&
      UserRoutinePanelProps.exercises[0].ID !== undefined &&
      UserRoutinePanelProps.name
    ) {
      setIsRoutineEmpty(false);
    } else {
      setIsRoutineEmpty(true);
    }
  }, [UserRoutinePanelProps]);

  return (
    <Container>
      {fillRoutineInformation()}
      <ExercisesPanel>
        {isRoutineEmpty ? '' : fillExercisesPanel()}
      </ExercisesPanel>
    </Container>
  );
};
