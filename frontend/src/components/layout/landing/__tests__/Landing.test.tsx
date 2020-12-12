import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Landing } from '../Landing';

describe('Landing', () => {
  describe('Render', () => {
    test('Should test Landing exist', () => {
      render(<Landing />);
      const landing = screen.getByRole('application');
      expect(landing).toBeInTheDocument();
    });
  });
});
