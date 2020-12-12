import * as React from 'react';
import { Review } from '../../atomic/review/Review';

export const ReviewPanel: React.FC = (): JSX.Element => {
  return (
    <div>
      <Review
        picture=""
        text="One of the best designed web apps I have ever set my eyes on."
        author="Manz"
        role="Web development mentor"
      />
      <Review
        picture=""
        text="One of the best designed web apps I have ever set my eyes on."
        author="Manz"
        role="Web development mentor"
      />
      <Review
        picture=""
        text="One of the best designed web apps I have ever set my eyes on."
        author="Manz"
        role="Web development mentor"
      />
    </div>
  );
};
