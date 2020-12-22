import * as React from 'react';
import styled from '@emotion/styled';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`bg-red-600 max-w-full pt-14 pb-1 pl-32`};
`;

const H1 = styled.h1`
  ${tw`mt-2 mb-0 font-bold text-4xl w-11/12 pt-14 pb-1 pl-32`};
  font-family: Inter;
  color: #ececec;
`;

const H2 = styled.h2`
  ${tw`m-0 font-bold text-2xl ml-36`};
  font-family: Inter;
  color: #ececec;
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
