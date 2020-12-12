import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ReviewPanel } from '../ReviewPanel';

describe('ReviewPanel', () => {
  describe('Render', () => {
    test('Should test ReviewPanel exist', () => {
      render(<ReviewPanel />);
      const reviewPanel = screen.getByRole('presentation');
      expect(reviewPanel).toBeInTheDocument();
    });
  });
});
