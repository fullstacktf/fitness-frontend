import * as React from 'react';
import styled from '@emotion/styled';
import { HashLink } from 'react-router-hash-link';

export interface RoutineExerciseProps {
  id: string;
  imageRoute: string;
  name: string;
  reps: string;
  series: string;
  description?: string;
}
const Container = styled.div`
  background: #ce3131 0% 0% no-repeat padding-box;
  box-shadow: 0vh 0vh 1.2vh #00000029;
  opacity: 1;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #1b1b1b;
  margin: 0.1vh;
  a {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #ce3131 0% 0% no-repeat padding-box;
    box-shadow: 0vh 0vh 1.2vh #00000029;
    opacity: 1;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #1b1b1b;
  }
`;

const Entry = styled.span`
  text-align: left;
  font: normal normal bold 1.4vh/3vh Inter;
  letter-spacing: 0vh;
  color: #ffffff;
  opacity: 1;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 50%;
  margin: 0vh 5vh;
`;

const ExercisePicture = styled.img`
  border-radius: 50%;
  width: 9.5vh;
  margin: 2vh;
  border: 0.1vh solid #707070;
  opacity: 1;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 64%;
`;

const Name = styled.div`
  text-align: left;
  font: normal normal bold 2.2vh/3vh Inter;
  letter-spacing: 0vh;
  color: #ffffff;
  opacity: 1;
`;

const Datas = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const Data = styled.div`
  text-align: left;
  font: normal normal bold 1.4vh/3vh Inter;
  letter-spacing: 0vh;
  color: #ffffff;
  opacity: 1;
`;

const Commentary = styled.p`
  word-wrap: wrap;
  text-align: left;
  font: normal normal bold 1.4vh/3vh Inter;
  letter-spacing: 0vh;
  color: #ffffff;
  opacity: 1;
`;

export const RoutineExercise: React.FC<RoutineExerciseProps> = (
  RoutineExerciseProps
) => {
  return (
    <Container>
      <HashLink to={'/exercise/' + RoutineExerciseProps.id}>
        <Box>
          <ExercisePicture
            src={RoutineExerciseProps.imageRoute}
            alt={RoutineExerciseProps.name + 'exercise picture'}
          />
          <Content>
            <Name>{RoutineExerciseProps.name}</Name>
            <Datas>
              <Data>Series: {RoutineExerciseProps.series}</Data>
              <Data>Reps: {RoutineExerciseProps.reps}</Data>
            </Datas>
          </Content>
        </Box>
        <Box>
          <Content>
            <Entry>Description:</Entry>
            <Commentary>{RoutineExerciseProps.description}</Commentary>
          </Content>
        </Box>
      </HashLink>
    </Container>
  );
};
