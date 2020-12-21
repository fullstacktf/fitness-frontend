import * as React from 'react';
import styled from '@emotion/styled';
import { Navbar } from '../navbar/Navbar';
import { RoutinePanel } from '../routine-panel/RoutinePanel';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`flex justify-center items-center flex-col w-full`};
`;

export const RoutinePage: React.FC = (): JSX.Element => {
  return (
    <Container role="application">
      <Navbar />
      <RoutinePanel />
    </Container>
  );
};
