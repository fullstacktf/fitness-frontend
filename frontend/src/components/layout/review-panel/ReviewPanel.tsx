import * as React from 'react';
import { Review } from '../../atomic/review/Review';

export const ReviewPanel: React.FC = (): JSX.Element => {
  return (
<<<<<<< HEAD
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
=======
    <div role="presentation">
      <Review picture="" text="" author="" role="" />
      <Review picture="" text="" author="" role="" />
      <Review picture="" text="" author="" role="" />
>>>>>>> 49724a8436ba835b9f940bba0f410758bfc2988a
    </div>
  );
};
