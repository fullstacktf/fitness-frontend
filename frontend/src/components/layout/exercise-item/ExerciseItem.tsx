import * as React from 'react';
import { ItemHeader } from '../../atomic/item-header/ItemHeader';
import { Description } from '../../atomic/description/Description';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContainerItem = styled.div`
  margin: 4vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Video = styled.iframe`
  width: 50vh;
  height: 31.5vh;
`;

export const ExerciseItem: React.FC = () => {
  const url =
    'https://www.youtube.com/watch?v=xTeX1YEiAdE&ab_channel=KristinaRybalchenko';
  url.replace('watch?v=', 'v/');

  return (
    <div>
      <ItemHeader
        itemName="asdcasdfsdfasrgfascxdvaserfa"
        category="asdfasdga"
      />
      <ContainerItem>
        <Description text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et." />
      </ContainerItem>
      <Container>
        <Video src={url}> </Video>
      </Container>
    </div>
  );
};
