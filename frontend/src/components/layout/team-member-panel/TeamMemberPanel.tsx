import * as React from 'react';
import { TeamMember } from '../../atomic/team-member/TeamMember';
import styled from '@emotion/styled';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';
import RaulPicture from './assets/raul.jpg';
import PabloPicture from './assets/paperz.jpg';
import NeikoxPicture from './assets/neikox.jpg';
import KdcrPicture from './assets/kdcr.jpg';

const Container = styled.div`
  ${tw`text-center bg-gray-200 pt-7`};
`;

const Members = styled.div`
  ${tw`flex justify-center`};
`;

const H1 = styled.h1`
  font: normal normal bold 2.8vh/3vh Inter;
`;

const H2 = styled.h2`
  height: 5vh;
  font: normal normal normal 2vh/3vh Inter;
`;

export const TeamMemberPanel: React.FC = () => {
  return (
    <Container id="who">
      <H1>The Team</H1>
      <H2>These are the guys responsible for developing the app.</H2>
      <Members>
        <TeamMember
          pictureRoute={KdcrPicture}
          fullName="Kevin David Cabrera Díaz"
          role="Full Stack Developer"
        />
        <TeamMember
          pictureRoute={RaulPicture}
          fullName="Raúl Rodríguez Torres"
          role="Full Stack Developer"
        />
        <TeamMember
          pictureRoute={NeikoxPicture}
          fullName="Kevin Antonio Suárez Sánchez"
          role="Full Stack Developer"
        />
        <TeamMember
          pictureRoute={PabloPicture}
          fullName="Pablo Pérez Pérez"
          role="Full Stack Developer"
        />
      </Members>
    </Container>
  );
};
