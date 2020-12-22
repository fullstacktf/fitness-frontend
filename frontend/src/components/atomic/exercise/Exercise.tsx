import * as React from 'react';
import styled from '@emotion/styled';
import { HashLink } from 'react-router-hash-link';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`flex flex-row items-center py-3.5 max-w-xs border border-gray-700 `};
  cursor: pointer;
  background: #ffffff;
  color: #1b1b1b;
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #1b1b1b;
  }
`;

const Content = styled.div`
  ${tw`flex flex-col items-start justify-evenly mx-3.5 h-full`};
`;

const P = styled.p`
  ${tw`tracking-normal text-left font-bold text-sm flex-wrap leading-5 `};
  font-family: Inter;
`;

const Span = styled.span`
  ${tw`flex-wrap text-left tracking-normal font-bold text-xs`};
  font-family: Inter;
`;

const Image = styled.img`
  ${tw`border border-gray-700 w-14 h-14 rounded-full`};
`;

export interface ExerciseProps {
  picture: string;
  exerciseName: string;
  category: string;
  id: number;
}

export const Exercise: React.FC<ExerciseProps> = (
  ExerciseProps
): JSX.Element => {
  return (
    <Container>
      <HashLink to={'/exercise/' + ExerciseProps.id}>
        <Content>
          <Image src={ExerciseProps.picture} alt="" />
        </Content>
        <Content>
          <P>{ExerciseProps.exerciseName}</P>
          <Span>{ExerciseProps.category}</Span>
        </Content>
      </HashLink>
    </Container>
  );
};
