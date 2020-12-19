import * as React from 'react';
import styled from '@emotion/styled';

const P = styled.p`
  font: normal normal normal 2.4vh/4vh Inter;
  color: #1b1b1b;
  line-height: 4vh;
  margin: 0;
`;
const Container = styled.div`
  max-width: 144vh;
`;
export interface DescriptionProps {
  text: string;
}

export const Description: React.FC<DescriptionProps> = (
  DescriptionProps
): JSX.Element => {
  return (
    <Container>
      <P>{DescriptionProps.text}</P>
    </Container>
  );
};
