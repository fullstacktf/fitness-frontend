import * as React from 'react';
import styled from '@emotion/styled';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Container = styled.div`
  max-width: 46vh;
`;

const H1 = styled.h1`
  ${tw`text-left tracking-normal`};
  word-wrap: wrap;
  color: #1b1b1b;
  font: normal normal bold 2.8vh/3vh Inter;
`;

const H2 = styled.h2`
  ${tw`text-left tracking-normal mb-0`};
  font: normal normal bold 1.6vh/3vh Inter;
  color: #1b1b1b;
  word-wrap: wrap;
`;
const H3 = styled.h3`
  ${tw`text-left tracking-normal mt-0`};
  font: italic normal normal 1.6vh/3vh Inter;
  color: #1b1b1b;
  word-wrap: wrap;
`;

export interface ReviewProps {
  picture: string;
  text: string;
  author: string;
  role: string;
}

export const Review: React.FC<ReviewProps> = (ReviewProps): JSX.Element => {
  return (
    <Container>
      <img src={ReviewProps.picture} alt="" />
      <H1>{ReviewProps.text}</H1>
      <H2>{ReviewProps.author}</H2>
      <H3>{ReviewProps.role}</H3>
    </Container>
  );
};
