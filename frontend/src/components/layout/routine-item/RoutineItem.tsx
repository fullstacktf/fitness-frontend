import * as React from 'react';
import { ItemHeader } from '../../atomic/item-header/ItemHeader';
import { Description } from '../../atomic/description/Description';
import styled from '@emotion/styled';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';
import { ExercisePanel } from '../exercise-panel/ExercisePanel';
import { useParams } from 'react-router-dom';
import { getRoutine } from '../../../utils/utils';
import { Navbar } from '../navbar/Navbar';
import { Footer } from '../footer/Footer';

const Container = styled.div`
  ${tw`flex flex-col items-center w-full`};
`;

const ContainerItem = styled.div`
  ${tw`m-7 flex flex-col items-center`};
`;

const Content = styled.div`
  ${tw`flex flex-col items-center w-full`};
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
