import * as React from 'react';
import { NavbarElement } from '../../atomic/navbar-element/NavbarElement';
import YouLiftLogo from './assets/YouLiftLogo.png';
import GithubLogo32 from './assets/social-media/GitHub-Mark-32px.png';
import styled from '@emotion/styled';
import { NavbarImage } from '../../atomic/navbar-image/NavbarImage';
import { getUserName, isLogged, logout } from '../../../utils/utils';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 8vh;
  background: white;
  position: fixed;
  top: 0;
  box-shadow: 0vh 0vh 1.2vh #00000029;
  opacity: 1;
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
  const [isLogin, setIsLogin] = React.useState(false);
  const [userName, setUserName] = React.useState(String);

  const signInButton: JSX.Element = (
    <NavbarElement text="Sign In" link="/login" color="#CE3131" />
  );

  const registerButton: JSX.Element = (
    <NavbarElement text="Register" link="/register" color="#CE3131" />
  );

  const profileButton: JSX.Element = (
    <NavbarElement text={userName} link="/profile" color="#1b1b1b" />
  );

  const logoutButton: JSX.Element = (
    <NavbarElement text="Logout" link="" onClick={logout} color="#1b1b1b" />
  );

  React.useEffect(() => {
    if (isLogged()) {
      setIsLogin(true);
      getUserName().then((name) => setUserName(name));
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <Container>
      <Logo src={YouLiftLogo} alt="YouLift Logo" />
      <Elements>
        <NavbarElement text="Home" link="/" />
        <NavbarElement text="Why" link="/#why" />
        <NavbarElement text="Who" link="/#who" />
        <NavbarElement text="Contact" link="/contact" />
        <NavbarImage
          link="https://github.com/fullstacktf/fitness-frontend"
          imageRoute={GithubLogo32}
          alt="Github"
        />
        {isLogin ? profileButton : signInButton}
        {isLogin ? logoutButton : registerButton}
      </Elements>
    </Container>
  );
};
