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

export const RoutineItem: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [name, setName] = React.useState(String);
  const [category, setCategory] = React.useState(String);
  const [description, setDescription] = React.useState(String);
  const [exercises, setExercises] = React.useState([]);

  const fillRoutine = (ID: string) => {
    getRoutine(ID).then((response) => {
      if (response !== Error) {
        setName(response.Name);
        setDescription(response.Description);
        setCategory(response.RoutineCategory.Name);
        setExercises(response.BaseExercises);
      } else {
        console.log(response);
      }
    });
  };

  React.useEffect(() => {
    fillRoutine(id);
  }, [id]);

  return (
    <Container>
      <Navbar />
      <ItemHeader itemName={name} category={category} />
      <Content>
        <ContainerItem>
          <Description text={description} />
        </ContainerItem>
        <ExercisePanel exercises={exercises} />
      </Content>
      <Footer position={exercises.length === 0 ? 'absolute' : 'relative'} />
    </Container>
  );
};
