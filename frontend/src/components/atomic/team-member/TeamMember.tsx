import * as React from 'react';
import styled from '@emotion/styled';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`flex justify-center items-center flex-col w-44 h-48 m-4`};
`;

const Image = styled.img`
  ${tw`w-3/6 rounded-full my-4`};
  height: 45%;
`;

const Name = styled.h1`
  ${tw`flex flex-grow text-center mb-4`};
  font: normal normal bold 2.4vh/3.2vh Inter;
`;

const Role = styled.p`
  color: #aaaaaa;
  font-size: 1.8vh;
  font: italic normal 300 1.6vh/2.1vh Inter;
  margin: 0 0 6vh 0;
`;

export interface TeamMemberProps {
  pictureRoute: string;
  fullName: string;
  role: string;
}

export const TeamMember: React.FC<TeamMemberProps> = (
  TeamMemberProps
): JSX.Element => {
  return (
    <Container>
      <Image
        src={TeamMemberProps.pictureRoute}
        alt={TeamMemberProps.fullName}
      />
      <Name>{TeamMemberProps.fullName}</Name>
      <Role>{TeamMemberProps.role}</Role>
    </Container>
  );
};
