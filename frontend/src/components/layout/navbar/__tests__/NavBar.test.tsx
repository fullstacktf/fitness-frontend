import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from '../Navbar';

describe('NavBar', () => {
  describe('Render', () => {
    test('Should test NavBar exist', () => {
      render(<Navbar />);
      const navBar = screen.getByRole('navigation');
      expect(navBar).toBeInTheDocument();
    });
  });
});
