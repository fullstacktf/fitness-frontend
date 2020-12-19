import * as React from 'react';
import styled from '@emotion/styled';

export interface RoutineExerciseProps {
  imageRoute: string;
  name: string;
  reps: string;
  series: string;
  rest: string;
  commentary?: string;
}
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #ce3131 0% 0% no-repeat padding-box;
  box-shadow: 0vh 0vh 1.2vh #00000029;
  opacity: 1;
  width: 100%;
  height: 100%;
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
            <Data>Rest Time: {RoutineExerciseProps.rest}</Data>
          </Datas>
        </Content>
      </Box>
      <Box>
        <Content>
          <Entry>Commentary</Entry>
          <Commentary>{RoutineExerciseProps.commentary}</Commentary>
        </Content>
      </Box>
    </Container>
  );
};
