import * as React from 'react';
import styled from '@emotion/styled';
import { TextField } from '../text-field/TextField';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`flex flex-row items-center justify-around`};
  font: normal normal bold 7.2vh/4vh Inter;
  box-shadow: 0px 0px 12px #00000029;
  color: #1b1b1b;
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
