import * as React from 'react';
import { NavbarElement } from '../../atomic/navbar-element/NavbarElement';

export const Navbar: React.FC = (): JSX.Element => {
  return (
    <div>
      {/* here goes the route of the logo */}
      <img src="" alt="" />
      <ul>
        <NavbarElement text="Home" link="#" />
        <NavbarElement text="Why" link="#" />
        <NavbarElement text="Who" link="#" />
        <NavbarElement text="Contact" link="#" />
        <NavbarElement text="" link="#" />
        <NavbarElement text="Sign In" link="#" />
        <NavbarElement text="Register" link="#" />
      </ul>
    </div>
  );
};
