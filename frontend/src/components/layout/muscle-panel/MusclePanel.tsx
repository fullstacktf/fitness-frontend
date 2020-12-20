import * as React from 'react';
import styled from '@emotion/styled';
import { Muscle } from '../../atomic/muscle/Muscle';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 3px inset #ffffff;
  width: 40vh;
`;

const Header = styled.div`
  text-align: center;
  width: 100%;
  height: 20%;
  background: #ce3131;
  color: #ffffff;
`;

export interface MusclePanelProps {
  muscles: any[];
}

export const MusclePanel: React.FC<MusclePanelProps> = (MusclePanelProps) => {
  const [isEmpty, setIsEmpty] = React.useState(true);

  const fillMuscles = (): JSX.Element[] => {
    return MusclePanelProps.muscles.map((muscle) => {
      return <Muscle key={muscle.ID} name={muscle.Name}></Muscle>;
    });
  };

  React.useEffect(() => {
    if (MusclePanelProps.muscles.length !== 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [MusclePanelProps.muscles.length]);

  return (
    <Container>
      <Header>Muscles</Header>
      {isEmpty ? '' : fillMuscles()}
    </Container>
  );
};
