import * as React from 'react';
import { ItemHeader } from '../../atomic/item-header/ItemHeader';
import { Description } from '../../atomic/description/Description';
import styled from '@emotion/styled';
import { RoutinePanel } from '../routine-panel/RoutinePanel';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContainerItem = styled.div`
  margin: 4vh;
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
