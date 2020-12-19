import * as React from 'react';
import { ProfileElement } from '../../atomic/profile-element/ProfileElement';
import { Footer } from '../footer/Footer';
import { Navbar } from '../navbar/Navbar';
import { RoutinePanel } from '../routine-panel/RoutinePanel';
import defaultProfilePicture from './assets/defaultProfilePicture.png';
import styled from '@emotion/styled';
import { getUserInformation, getUserStats } from '../../../utils/utils';

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
  width: 99vw;
`;

export const Profile: React.FC = () => {
  const [userName, setUserName] = React.useState(String);
  const [userHeight, setUserHeight] = React.useState(String);
  const [userWeight, setUserWeight] = React.useState(String);
  const [userBiography, setUserBiography] = React.useState(String);

  const fillUserInformation = () => {
    getUserInformation().then((user) => {
      setUserName(user.Name);
      setUserBiography(user.Biography);
    });
    getUserStats().then((stats) => {
      setUserHeight(stats.Height);
      setUserWeight(stats.LastWeight);
    });
  };

  React.useEffect(() => {
    fillUserInformation();
  });

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
            <RoutinePanel
              imageRoute={defaultProfilePicture}
              name="Weight Loss"
              description="Breve descripcion de la rutina"
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
