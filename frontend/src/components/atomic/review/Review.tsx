import * as React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 46vh;
`;

const H1 = styled.h1`
  word-wrap: wrap;
  text-align: left;
  font: normal normal bold 2.8vh/3vh Inter;
  letter-spacing: 0px;
  color: #1b1b1b;
  opacity: 1;
`;

const H2 = styled.h2`
  word-wrap: wrap;
  text-align: left;
  font: normal normal bold 1.6vh/3vh Inter;
  letter-spacing: 0px;
  color: #1b1b1b;
  opacity: 1;
  margin-bottom: 0vh;
`;

const H3 = styled.h3`
  word-wrap: wrap;
  text-align: left;
  font: italic normal normal 1.6vh/3vh Inter;
  letter-spacing: 0px;
  color: #1b1b1b;
  opacity: 1;
  margin-top: 0vh;
`;

export interface ReviewProps {
  picture: string;
  text: string;
  author: string;
  role: string;
}

export const Review: React.FC<ReviewProps> = ({
  picture,
  text,
  author,
  role,
}: ReviewProps): JSX.Element => {
  return (
    <Container>
      <img src={picture} alt="" />
      <H1>{text}</H1>
      <H2>{author}</H2>
      <H3>{role}</H3>
    </Container>
  );
};
