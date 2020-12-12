import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer', () => {
  describe('Render', () => {
    test('Should test Footer exists', () => {
      render(<Footer />);
      const footer = screen.getByText('Privacy');
      expect(footer).toBeInTheDocument();
    });
  });
});
