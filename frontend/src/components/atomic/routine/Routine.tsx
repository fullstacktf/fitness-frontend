import * as React from 'react';
import styled from '@emotion/styled';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`flex flex-row items-center `};
  max-width: 46vh;
`;

const P = styled.p`
  ${tw`text-left tracking-normal text-black `};
  font: normal normal bold 3.2vh/4vh Inter;
  word-wrap: wrap;
`;

export interface RoutineProps {
  picture: string;
  routineName: string;
  category: string;
}

export const Routine: React.FC<RoutineProps> = ({
  picture,
  routineName,
  category,
}: RoutineProps): JSX.Element => {
  return (
    <Container>
      <div>
        <img src={picture} alt="" />
      </div>
      <div>
        <P>{routineName}</P>
        <P>{category}</P>
      </div>
    </Container>
  );
};
