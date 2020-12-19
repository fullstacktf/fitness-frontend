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
      <ItemHeader itemName="Aqui to' loko mandandole" category="mambiche" />
      <Description text="dale mambiche, va rompiendo piche roque roque roque, me chupó el caniche dale mambiche, va rompiendo piche roque roque roque, me chupó el caniche dale mambiche, va rompiendo piche roque roque roque, me chupó el caniche dale mambiche, va rompiendo piche roque roque roque, me chupó el caniche dale mambiche, va rompiendo piche roque roque roque, me chupó el caniche " />
      <Container>
        <RoutinePanel />
      </Container>
    </div>
  );
};
