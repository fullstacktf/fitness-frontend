import * as React from 'react';
import styled from '@emotion/styled';
import { Routine } from '../../atomic/routine/Routine';
import defaultRoutinePicture from './assets/defaultExercisePicture.svg';

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

export interface RoutinePanelProps {
  routines: any[];
}

export const RoutinePanel: React.FC<RoutinePanelProps> = (
  RoutinePanelProps
): JSX.Element => {
  const [isEmpty, setIsEmpty] = React.useState(true);

  const fillRoutines = (): JSX.Element[] => {
    const elements: JSX.Element[] = RoutinePanelProps.routines.map(
      (routine: any) => {
        return (
          <Routine
            key={routine.ID}
            picture={defaultRoutinePicture}
            routineName={routine.Name}
            category={routine.RoutineCategory.Name}
            id={routine.ID}
          />
        );
      }
    );
    return elements;
  };

  React.useEffect(() => {
    if (RoutinePanelProps.routines.length !== 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [RoutinePanelProps]);

  return <Container>{isEmpty ? '' : fillRoutines()}</Container>;
};
