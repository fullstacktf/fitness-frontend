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
