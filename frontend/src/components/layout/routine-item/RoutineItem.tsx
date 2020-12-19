import * as React from 'react';
import { ItemHeader } from '../../atomic/item-header/ItemHeader';
import { Description } from '../../atomic/description/Description';
import styled from '@emotion/styled';
import { RoutinePanel } from '../routine-panel/RoutinePanel';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const RoutineItem: React.FC = () => {
  return (
    <div>
      <ItemHeader itemName="" category="" />
      <Description text="" />
      <Container>
        <RoutinePanel />
      </Container>
    </div>
  );
};
