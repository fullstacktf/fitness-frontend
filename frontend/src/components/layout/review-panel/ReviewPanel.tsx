import * as React from 'react';
import { Review } from '../../atomic/review/Review';

export const ReviewPanel: React.FC = (): JSX.Element => {
  return (
    <div role="presentation">
      <Review picture="" text="" author="" role="" />
      <Review picture="" text="" author="" role="" />
      <Review picture="" text="" author="" role="" />
    </div>
  );
};
