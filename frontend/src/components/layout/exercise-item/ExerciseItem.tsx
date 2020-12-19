import * as React from 'react';
import { ItemHeader } from '../../atomic/item-header/ItemHeader';
import { Description } from '../../atomic/description/Description';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Video = styled.iframe`
  width: 50vh;
  height: 31.5vh;
`;

export const ExerciseItem: React.FC = () => {
  return (
    <div>
      <ItemHeader itemName="Aqui to' loko mandandole" category="mambiche" />
      <Description text="dale mambiche, va rompiendo piche roque roque roque, me chupó el caniche dale mambiche, va rompiendo piche roque roque roque, me chupó el caniche dale mambiche, va rompiendo piche roque roque roque, me chupó el caniche dale mambiche, va rompiendo piche roque roque roque, me chupó el caniche dale mambiche, va rompiendo piche roque roque roque, me chupó el caniche " />
      <Container>
        <Video src=""> </Video>
      </Container>
    </div>
  );
};
