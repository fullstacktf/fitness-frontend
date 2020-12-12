import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Review } from '../Review';

describe('Review', () => {
  describe('Render', () => {
    test('Debería renderizar', () => {
      render(<Review picture="" text="bew" author="" role="" />);
      const review = screen.getByText('bew');
      expect(review).toBeInTheDocument();
    });
  });
});
