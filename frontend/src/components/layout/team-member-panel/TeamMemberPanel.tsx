import * as React from 'react';
import { TeamMember } from '../../atomic/team-member/TeamMember';
import styled from '@emotion/styled';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

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
          pictureRoute=""
          fullName="Kevin David Cabrera Díaz"
          role="Fullstack Developer"
        />
        <TeamMember
          pictureRoute=""
          fullName="Raúl Rodríguez Torres"
          role="Fullstack Developer"
        />
        <TeamMember
          pictureRoute=""
          fullName="Kevin Antonio Suárez Sánchez"
          role="Fullstack Developer"
        />
        <TeamMember
          pictureRoute=""
          fullName="Pablo Pérez Pérez"
          role="Fullstack Developer"
        />
      </Members>
    </Container>
  );
};
