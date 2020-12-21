import * as React from 'react';
import styled from '@emotion/styled';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`bg-red-600 max-w-full`};
  padding: 8.2vh 0 1vh 24vh;
`;

const A = styled.a`
  ${tw`no-underline m-0 `};
  font: normal normal normal 2.4vh/2.9vh Inter;
  color: #9dbbf8;
`;

const H1 = styled.h1`
  ${tw`mt-2 mb-0`};
  font: normal normal bold 7.2vh/8.7vh Inter;
  color: #ececec;
`;

const H2 = styled.h2`
  font: normal normal bold 4.8vh/5.9vh Inter;
  color: #ececec;
  margin: 0;
`;

export interface ItemHeaderProps {
  itemName: string;
  category: string;
}

export const ItemHeader: React.FC<ItemHeaderProps> = (
  ItemHeaderProps
): JSX.Element => {
  return (
    <Container>
      <A href="##">Back</A>
      <H1>{ItemHeaderProps.itemName}</H1>
      <H2>{ItemHeaderProps.category}</H2>
    </Container>
  );
};
