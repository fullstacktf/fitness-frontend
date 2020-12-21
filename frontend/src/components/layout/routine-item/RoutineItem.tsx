import * as React from 'react';
import { ItemHeader } from '../../atomic/item-header/ItemHeader';
import { Description } from '../../atomic/description/Description';
import styled from '@emotion/styled';
import { RoutinePanel } from '../routine-panel/RoutinePanel';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`flex flex-col items-center`};
`;

const ContainerItem = styled.div`
  ${tw`m-7`};
`;

export const RoutineItem: React.FC = () => {
  return (
    <div>
      <ItemHeader itemName="asdjhfbalsj ndfljab" category="dasfasdf" />
      <Container>
        <ContainerItem>
          <Description text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et." />
        </ContainerItem>
        <RoutinePanel />
      </Container>
    </div>
  );
};
