import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { NavbarElement } from '../NavbarElement';

describe('NavBarElement', () => {
  describe('Render', () => {
    test('Debería renderizar un NavBar con texto Nav', () => {
      render(<NavbarElement text="Nav" link="" />);
      const NavBarElement = screen.getByText('Nav');
      expect(NavBarElement).toBeInTheDocument();
    });
  });
});
