import * as React from 'react';
import { ProfileElement } from '../../atomic/profile-element/ProfileElement';
import { Footer } from '../footer/Footer';
import { Navbar } from '../navbar/Navbar';
import { UserRoutinePanel } from '../user-routine-panel/UserRoutinePanel';
import defaultProfilePicture from './assets/defaultProfilePicture.png';
import defaultExercisePicture from './assets/defaultExercisePicture.svg';

import styled from '@emotion/styled';
import {
  getUserInformation,
  getUserRoutine,
  getUserRoutineExercises,
  getUserStats,
} from '../../../utils/utils';

export interface ProfileProps {
  imageRoute?: string;
  name: string;
  weight: string;
  height: string;
  bio?: string;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2vh 0vh;
  width: 80%;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10vh 0vh;
  width: 90%;
`;

const FooterContainer = styled.div`
  position: relative;
  bottom: 0;
  width: 99vw;
`;

export const Profile: React.FC = () => {
  const [userName, setUserName] = React.useState(String);
  const [userHeight, setUserHeight] = React.useState(String);
  const [userWeight, setUserWeight] = React.useState(String);
  const [userBiography, setUserBiography] = React.useState(String);

  const [routineName, setRoutineName] = React.useState(String);
  const [routineDescription, setRoutineDescription] = React.useState(String);
  const [routineExercises, setRoutineExercises] = React.useState([{}]);

  const fillUserInformation = () => {
    getUserInformation().then((user) => {
      if (user !== Error) {
        setUserName(user.Name);
        setUserBiography(user.Biography);
      }
    });
    getUserStats().then((stats) => {
      if (stats !== Error) {
        setUserHeight(stats.Height);
        setUserWeight(stats.LastWeight);
      }
    });
  };

  const fillRoutineInformation = () => {
    getUserRoutine().then((routine) => {
      if (routine !== Error) {
        setRoutineName(routine.Name);
        setRoutineDescription(routine.Description);
      }
    });
    getUserRoutineExercises().then((exercises) => {
      if (exercises !== Error) {
        setRoutineExercises(exercises);
      }
    });
  };

  React.useEffect(() => {
    fillUserInformation();
    fillRoutineInformation();
  }, []);

  return (
    <Container>
      <Navbar />
      <Content>
        <Box>
          <Box>
            <ProfileElement
              imageRoute={defaultProfilePicture}
              name={userName}
              height={userHeight}
              weight={userWeight}
              bio={userBiography}
            />
          </Box>
          <Box>
            <UserRoutinePanel
              imageRoute={defaultExercisePicture}
              name={routineName}
              description={routineDescription}
              exercises={routineExercises}
            />
          </Box>
        </Box>
      </Content>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
};
