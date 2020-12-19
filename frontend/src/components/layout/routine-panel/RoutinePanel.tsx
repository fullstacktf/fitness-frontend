import * as React from 'react';
import styled from '@emotion/styled';
import { Routine } from '../../atomic/routine/Routine';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  background-color: #ce3131;
  padding: 4vh;
  margin: 0;
  width: 144vh;
`;

export const RoutinePanel: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Routine picture="" routineName="Weight Loss" category="Category" />
      <Routine picture="" routineName="Weight Loss" category="Category" />
      <Routine picture="" routineName="Weight Loss" category="Category" />
      <Routine picture="" routineName="Weight Loss" category="Category" />
      <Routine picture="" routineName="Weight Loss" category="Category" />
      <Routine picture="" routineName="Weight Loss" category="Category" />
    </Container>
  );
};
