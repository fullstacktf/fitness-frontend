import * as React from 'react';
import styled from '@emotion/styled';
import { Review } from '../../atomic/review/Review';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  background: #ececec 0% 0% no-repeat padding-box;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 8vh 24vh;
`;

export const ReviewPanel: React.FC = (): JSX.Element => {
  return (
    <Container role="presentation">
      <Review
        picture=""
        text="One of the best designed web apps I have ever set my eyes on."
        author="Manz"
        role="Web development mentor"
      />
      <Review
        picture=""
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        author="Manz"
        role="Web development mentor"
      />
      <Review
        picture=""
        text="One of the best designed web apps I have ever set my eyes on."
        author="Manz"
        role="Web development mentor"
      />
    </Container>
  );
};
