import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { NavbarImage } from '../NavbarImage';
import TestLogo from './assets/test_logo.png';

describe('NavbarElement', () => {
  describe('Render', () => {
    test('Should test link exists', () => {
      render(<NavbarImage link="#" imageRoute={TestLogo} />);
      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
    });

    test('Should test logo exists', () => {
      render(<NavbarImage link="#" imageRoute={TestLogo} />);
      const logo = screen.getByRole('img');
      expect(logo).toBeInTheDocument();
    });
  });
});
