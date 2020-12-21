import * as React from 'react';
import styled from '@emotion/styled';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';
import { HashLink } from 'react-router-hash-link';

const Container = styled.div`
  ${tw`flex flex-row items-center `};
  max-width: 46vh;
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0vh 2vh;
  height: 100%;
`;

const P = styled.p`
  word-wrap: wrap;
  text-align: left;
  font: normal normal bold 2.2vh/3vh Inter;
  letter-spacing: 0px;
  opacity: 1;
  line-height: 3vh;
`;

const Span = styled.span`
  word-wrap: wrap;
  text-align: left;
  font: normal normal bold 1.8vh/2.8vh Inter;
  letter-spacing: 0px;
  opacity: 1;
  line-height: 1vh;
`;

const Image = styled.img`
  width: 10vh;
  border-radius: 50%;
  border: 1px solid #1b1b1b;
`;

export interface RoutineProps {
  picture: string;
  routineName: string;
  category: string;
  id: number;
}

export const Routine: React.FC<RoutineProps> = (RoutineProps): JSX.Element => {
  return (
    <Container>
      <HashLink to={'/routine/' + RoutineProps.id}>
        <Content>
          <Image src={RoutineProps.picture} alt="" />
        </Content>
        <Content>
          <P>{RoutineProps.routineName}</P>
          <Span>{RoutineProps.category}</Span>
        </Content>
      </HashLink>
    </Container>
  );
};
