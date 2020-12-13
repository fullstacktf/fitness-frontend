import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from '../Navbar';

describe('Navbar', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  describe('Render', () => {
    test('Should test logo exists', () => {
      const logo = screen.getByAltText('YouLift Logo');
      expect(logo).toBeInTheDocument();
    });

    test('Should test navbar elements container exists', () => {
      const container = screen.getByRole('list');
      expect(container).toBeInTheDocument();
    });
  });
});
