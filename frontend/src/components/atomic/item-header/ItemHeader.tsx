import * as React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background: #ce3131 0% 0% no-repeat padding-box;
  width: 87.8%;
  padding: 8.2vh 0 1vh 24vh;
`;

const H1 = styled.h1`
  font: normal normal bold 6.2vh/7.7vh Inter;
  color: #ececec;
  margin-top: 2vh;
  margin-bottom: 0;
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
