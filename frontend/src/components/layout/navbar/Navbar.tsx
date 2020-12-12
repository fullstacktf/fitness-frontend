import * as React from 'react';
import { NavbarElement } from '../../atomic/navbar-element/NavbarElement';
import YouLiftLogo from './assets/YouLiftLogo.png';
import GithubLogo32 from './assets/social-media/GitHub-Mark-32px.png';
import styled from '@emotion/styled';
import { NavbarImage } from '../../atomic/navbar-image/NavbarImage';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 8vh;
  background: white;
`;

const Elements = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50vh;
  font-size: 1.5vh;
`;

const Logo = styled.img`
  height: 15vh;
`;

export const Navbar: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Logo src={YouLiftLogo} alt="YouLift Logo" />
      <Elements>
        <NavbarElement text="Home" link="#" />
        <NavbarElement text="Why" link="#" />
        <NavbarElement text="Who" link="#" />
        <NavbarElement text="Contact" link="#" />
        <NavbarImage link="#" imageRoute={GithubLogo32} alt="Github" />
        <NavbarElement text="Sign In" link="#" color="#CE3131" />
        <NavbarElement text="Register" link="#" color="#CE3131" />
      </Elements>
    </Container>
  );
};
