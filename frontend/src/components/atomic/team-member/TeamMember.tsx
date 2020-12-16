import * as React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 28vh;
  height: 32vh;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 50%;
  height: 45%;
`;

const Name = styled.h1`
  display: flex;
  flex-grow: 1;
  font-size: 2vh;
  text-align: center;
  font: normal normal bold 2.4vh/3.2vh V;
`;

const Role = styled.p`
  color: #aaaaaa;
  font-size: 1.8vh;
  font: italic normal 300 1.6vh/2.1vh V;
`;

export interface TeamMemberProps {
  pictureRoute: string;
  fullName: string;
  role: string;
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  pictureRoute,
  fullName,
  role,
}: TeamMemberProps): JSX.Element => {
  return (
    <Container>
      <Image src={pictureRoute} alt={fullName} />
      <Name>{fullName}</Name>
      <Role>{role}</Role>
    </Container>
  );
};
