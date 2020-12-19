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
      <ItemHeader itemName="" category="" />
      <Description text="" />
      <Container>
        <Video src=""> </Video>
      </Container>
    </div>
  );
};
