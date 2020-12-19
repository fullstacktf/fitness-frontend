import * as React from 'react';
import { ItemHeader } from '../../atomic/item-header/ItemHeader';
import { Description } from '../../atomic/description/Description';
import styled from '@emotion/styled';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`flex justify-center`};
`;
const ContainerItem = styled.div`
  ${tw`flex justify-center md:m-8`};
`;

const Video = styled.iframe`
  width: 50vh;
  height: 31.5vh;
`;

export const ExerciseItem: React.FC = () => {
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
        <Video src="https://www.youtube.com/embed/tgbNymZ7vqY"></Video>
      </Container>
    </div>
  );
};
