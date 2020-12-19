import * as React from 'react';
import styled from '@emotion/styled';
import { TextField } from '../text-field/TextField';

const Container = styled.div`
  font: normal normal bold 7.2vh/4vh Inter;
  color: #1b1b1b;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 0px 12px #00000029;
`;

export interface FilterPanelProps {
  title: string;
}

export const FilterPanel: React.FC<FilterPanelProps> = (
  FilterPanelProps
): JSX.Element => {
  return (
    <Container>
      <h1>{FilterPanelProps.title}</h1>
      <TextField text="" type="text" />
    </Container>
  );
};
