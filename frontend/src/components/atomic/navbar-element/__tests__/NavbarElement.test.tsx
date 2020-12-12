import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { NavbarElement } from '../NavbarElement';
import { Navbar } from '../../../layout/navbar/Navbar';

describe('NavbarElement', () => {
  describe('Render', () => {
    test('Should test link text exists', () => {
      render(<NavbarElement link="#" text="Test Link" />);
      const text = screen.getByText('Test Link');
      expect(text).toBeInTheDocument();
    });

    test('Should test link exists', () => {
      render(<NavbarElement link="#" text="Test Link" />);
      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
    });
  });
});
