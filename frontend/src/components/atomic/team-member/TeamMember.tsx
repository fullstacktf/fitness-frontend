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
  ${tw`flex flex-grow text-center mb-4 font-bold text-xl`};
  font-family: Inter;
`;

const Role = styled.p`
  ${tw`text-base italic mb-7`};
  color: #aaaaaa;
  font-family: Inter;
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
