import * as React from 'react';
import styled from '@emotion/styled';
import { Navbar } from '../navbar/Navbar';
import { Footer } from '../footer/Footer';
import LinkedInLogo from './assets/linkedin-logo.png';
import TwitterLogo from './assets/twitter-logo.png';
import YouTubeLogo from './assets/youtube-logo.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #ececec;
  height: 100vh;
`;

const Content = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  padding: 14vh 28vh;
  text-align: center;
  margin: 10vh 24vh;
`;

const H1 = styled.h1`
  font: normal normal bold 10vh/4vh Inter;
  letter-spacing: 0px;
  color: #1b1b1b;
`;

const H2 = styled.h2`
  font: normal normal normal 4.8vh/4vh Inter;
  letter-spacing: 0px;
  color: #1b1b1b;
`;

const H3 = styled.h3`
  font: normal normal 300 3.6vh/4vh Inter;
  letter-spacing: 0px;
  color: #aaaaaa;
`;

const Logos = styled.div`
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  padding: 0 2vh;
  height: 4vh;
`;

export const ContactPage: React.FC = (): JSX.Element => {
  return (
    <Container role="application">
      <Navbar />
      <Content>
        <H1>Contact with us</H1>
        <H2>This is the first step to an amazing trip.</H2>
        <H3>supp.youlift.xyz@gmail.com</H3>
        <H3>You can also find us in our social media.</H3>
        <Logos>
          <Logo src={LinkedInLogo} alt="LinkedIn" />
          <Logo src={TwitterLogo} alt="Twitter" />
          <Logo src={YouTubeLogo} alt="YouTube" />
        </Logos>
      </Content>
      <Footer />
    </Container>
  );
};
