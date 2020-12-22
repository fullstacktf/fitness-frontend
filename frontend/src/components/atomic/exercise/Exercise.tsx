import * as React from 'react';
import styled from '@emotion/styled';
import { HashLink } from 'react-router-hash-link';

const Container = styled.div`
  max-width: 46vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #1b1b1b;
  padding: 2vh 0vh;
  background: #ffffff;
  color: #1b1b1b;
  cursor: pointer;
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
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
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
