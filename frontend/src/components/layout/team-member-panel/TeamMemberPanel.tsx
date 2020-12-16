import * as React from 'react';
import { TeamMember } from '../../atomic/team-member/TeamMember';
import styled from '@emotion/styled';

const Container = styled.div`
  text-align: center;
`;

const Members = styled.div`
  display: flex;
  justify-content: center;
`;
const H2 = styled.h2`
  height: 5vh;
`;

export const TeamMemberPanel: React.FC = () => {
  return (
    <Container>
      <h1>The Team</h1>
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
