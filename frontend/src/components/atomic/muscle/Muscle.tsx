import * as React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  border-bottom: 1px solid lightgray;
  text-transform: capitalize;
`;

export interface MuscleProps {
  name: string;
}

export const Muscle: React.FC<MuscleProps> = (MuscleProps) => {
  return <Container>{MuscleProps.name}</Container>;
};
