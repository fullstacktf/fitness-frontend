import * as React from 'react';
import styled from '@emotion/styled';
import { Navbar } from '../navbar/Navbar';
import { RoutinePanel } from '../routine-panel/RoutinePanel';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';
import { getRoutines } from '../../../utils/utils';
import { Footer } from '../footer/Footer';

const Container = styled.div`
  ${tw`flex justify-center items-center flex-col w-full`};
`;

export const RoutinePage: React.FC = (): JSX.Element => {
  const [routines, setRoutines] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const response = await getRoutines();
      if (response !== Error) {
        setRoutines(response);
      }
    })();
  }, []);

  return (
    <Container role="application">
      <Navbar />
      <RoutinePanel routines={routines} />
      <Footer position={routines.length === 0 ? 'absolute' : 'fixed'} />
    </Container>
  );
};
