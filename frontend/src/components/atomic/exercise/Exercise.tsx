import * as React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 46vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const P = styled.p`
  word-wrap: wrap;
  text-align: left;
  font: normal normal bold 3.2vh/4vh Inter;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  line-height: 1vh;
`;

export interface ExerciseProps {
  picture: string;
  exerciseName: string;
  category: string;
  videoUrl: string;
}

export const Exercise: React.FC<ExerciseProps> = (
  ExerciseProps
): JSX.Element => {
  return (
    <Container>
      <div>
        <img src={ExerciseProps.picture} alt="" />
      </div>
      <div>
        <P>{ExerciseProps.exerciseName}</P>
        <P>{ExerciseProps.category}</P>
        <P>{ExerciseProps.videoUrl}</P>
      </div>
    </Container>
  );
};
