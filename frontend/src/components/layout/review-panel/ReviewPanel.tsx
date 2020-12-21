import * as React from 'react';
import styled from '@emotion/styled';
import { Review } from '../../atomic/review/Review';
import EdgarPoePicture from './assets/edgar-poe.jpeg';
import JohnSmithPicture from './assets/john-smith.jpeg';
import MarySuePicture from './assets/mary-sue.jpeg';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  background: #ececec 0% 0% no-repeat padding-box;
  padding: 8vh 24vh;
`;

export const ReviewPanel: React.FC = (): JSX.Element => {
  return (
    <Container role="presentation">
      <Review
        picture={JohnSmithPicture}
        text="Ever since I started using this application, I haven't had any other need to use another tracker ever again!"
        author="John Smith"
        role="Professional Weight Lifter"
      />
      <Review
        picture={MarySuePicture}
        text="I didn't know how much I needed this app since I started using it."
        author="Mary Sue"
        role="Power Lifter"
      />
      <Review
        picture={EdgarPoePicture}
        text="Using this app has rendered all my older apps outdated."
        author="Edgar Poe"
        role="Diary Columnist"
      />
    </Container>
  );
};
