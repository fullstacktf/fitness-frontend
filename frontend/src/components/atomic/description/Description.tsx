import * as React from 'react';
import styled from '@emotion/styled';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`max-w-screen-xl`};
`;

const P = styled.p`
  ${tw`m-0 leading-5`};
  font-family: Inter;
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
