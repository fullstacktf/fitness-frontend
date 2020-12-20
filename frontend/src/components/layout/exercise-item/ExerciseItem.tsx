import * as React from 'react';
import { ItemHeader } from '../../atomic/item-header/ItemHeader';
import { Description } from '../../atomic/description/Description';
import styled from '@emotion/styled';
import { useParams } from 'react-router';
import { getExercise } from '../../../utils/utils';
import { Navbar } from '../navbar/Navbar';
import { Footer } from '../footer/Footer';
import { MusclePanel } from '../muscle-panel/MusclePanel';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const ContainerVideo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
`;

const ContainerItem = styled.div`
  margin: 4vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Video = styled.iframe`
  width: 50vh;
  height: 31.5vh;
`;

export const ExerciseItem: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [name, setName] = React.useState(String);
  const [category, setCategory] = React.useState(String);
  const [description, setDescription] = React.useState(String);
  const [url, setUrl] = React.useState(String);
  const [muscles, setMuscles] = React.useState([]);

  const fillExercise = (ID: string) => {
    getExercise(ID).then((response) => {
      if (response !== Error) {
        setName(response.Name);
        setDescription(response.Description);
        setCategory(response.ExerciseCategory.Name);
        setUrl(response.VideoURL.replace('watch?v=', 'embed/'));
        setMuscles(response.Muscles);
      } else {
        console.log(response);
      }
    });
  };

  React.useEffect(() => {
    fillExercise(id);
  }, [id]);

  return (
    <Container>
      <Navbar />
      <ItemHeader itemName={name} category={category} />
      <ContainerItem>
        <Description text={description} />
      </ContainerItem>
      <ContainerVideo>
        <MusclePanel muscles={muscles} />
        <Video src={url}> </Video>
      </ContainerVideo>
      <Footer />
    </Container>
  );
};
