import * as React from 'react';
import styled from '@emotion/styled';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`bg-red-600 max-w-full`};
  padding: 8.2vh 0 1vh 24vh;
`;

const H1 = styled.h1`
  ${tw`mt-2 mb-0`};
  font: normal normal bold 6.2vh/7.7vh Inter;
  color: #ececec;
  width: 87.8%;
  padding: 8.2vh 0 1vh 24vh;
`;

const H2 = styled.h2`
  font: normal normal bold 2.8vh/3.9vh Inter;
  color: #ececec;
  margin: 0;
`;

export interface ItemHeaderProps {
  itemName: string;
  category: string;
}

export const ItemHeader: React.FC<ItemHeaderProps> = (ItemHeaderProps) => {
  return (
    <Container>
      <H1>{ItemHeaderProps.itemName}</H1>
      <H2>{ItemHeaderProps.category}</H2>
    </Container>
  );
};
