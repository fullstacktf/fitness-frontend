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

interface ExerciseInformation {
  name: string;
  category: string;
  description: string;
  url: string;
  muscles: any[];
}

export const ExerciseItem: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const emptyExerciseInformation: ExerciseInformation = {
    name: '',
    description: '',
    category: '',
    url: '',
    muscles: [],
  };

  const [
    exerciseInformation,
    setExerciseInformation,
  ] = React.useState<ExerciseInformation>(emptyExerciseInformation);

  const fillExercise = (ID: string) => {
    getExercise(ID).then((response) => {
      if (response !== Error) {
        const information: ExerciseInformation = {
          name: response.Name,
          description: response.Description,
          category: response.ExerciseCategory.Name,
          url: response.VideoURL.replace('watch?v=', 'embed/'),
          muscles: response.Muscles,
        };
        setExerciseInformation(information);
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
      <ItemHeader
        itemName={exerciseInformation.name}
        category={exerciseInformation.category}
      />
      <ContainerItem>
        <Description text={exerciseInformation.description} />
      </ContainerItem>
      <ContainerVideo>
        <MusclePanel muscles={exerciseInformation.muscles} />
        <Video src={exerciseInformation.url}> </Video>
      </ContainerVideo>
      <Footer />
    </Container>
  );
};
