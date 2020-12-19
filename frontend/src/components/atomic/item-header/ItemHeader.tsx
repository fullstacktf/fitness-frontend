import * as React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background: #ce3131 0% 0% no-repeat padding-box;
  max-width: 192vh;
  padding: 8.2vh 0 1vh 24vh;
`;
const A = styled.a`
  text-decoration: none;
  font: normal normal normal 2.4vh/2.9vh Inter;
  color: #9dbbf8;
  margin: 0;
`;
const H1 = styled.h1`
  font: normal normal bold 7.2vh/8.7vh Inter;
  color: #ececec;
  margin-top: 2vh;
  margin-bottom: 0;
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
