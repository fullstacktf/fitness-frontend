import * as React from 'react';
import { ItemHeader } from '../../atomic/item-header/ItemHeader';
import { Description } from '../../atomic/description/Description';
import styled from '@emotion/styled';
import { ExercisePanel } from '../exercise-panel/ExercisePanel';
import { useParams } from 'react-router-dom';
import { getRoutine } from '../../../utils/utils';
import { Navbar } from '../navbar/Navbar';
import { Footer } from '../footer/Footer';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ContainerItem = styled.div`
  margin: 4vh;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface RoutineInformation {
  name: string;
  category: string;
  description: string;
  exercises: any[];
}

export const RoutineItem: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const emptyRoutineInformation: RoutineInformation = {
    name: '',
    category: '',
    description: '',
    exercises: [],
  };

  const [routineInformation, setRoutineInformation] = React.useState(
    emptyRoutineInformation
  );

  const fillRoutine = (ID: string) => {
    getRoutine(ID).then((response) => {
      if (response !== Error) {
        const information: RoutineInformation = {
          name: response.Name,
          description: response.Description,
          category: response.RoutineCategory.Name,
          exercises: response.BaseExercises,
        };
        setRoutineInformation(information);
      } else {
        console.error(response);
      }
    });
  };

  React.useEffect(() => {
    fillRoutine(id);
  }, [id]);

  return (
    <Container>
      <Navbar />
      <ItemHeader
        itemName={routineInformation.name}
        category={routineInformation.category}
      />
      <Content>
        <ContainerItem>
          <Description text={routineInformation.description} />
        </ContainerItem>
        <ExercisePanel exercises={routineInformation.exercises} />
      </Content>
      <Footer
        position={
          routineInformation.exercises.length === 0 ? 'absolute' : 'relative'
        }
      />
    </Container>
  );
};
