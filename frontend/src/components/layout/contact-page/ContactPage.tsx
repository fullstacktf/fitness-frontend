import * as React from 'react';
import styled from '@emotion/styled';
import { Navbar } from '../navbar/Navbar';
import { Footer } from '../footer/Footer';
import LinkedInLogo from './assets/linkedin-logo.png';
import TwitterLogo from './assets/twitter-logo.png';
import YouTubeLogo from './assets/youtube-logo.png';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`flex justify-center items-center flex-col w-full`};
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
  margin-bottom: 10vh;
`;

const H2 = styled.h2`
  font: normal normal normal 4.8vh/4vh Inter;
  letter-spacing: 0px;
  color: #1b1b1b;
  margin-bottom: 2vh;
`;

const H3 = styled.h3`
  font: normal normal 300 3.6vh/4vh Inter;
  letter-spacing: 0px;
  color: #aaaaaa;
  margin-bottom: 2vh;
`;

const Logos = styled.div`
  ${tw`flex justify-center`};
`;

const Logo = styled.img`
  ${tw`px-8 h-10`};
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
          <a href="/contact">
            <Logo src={LinkedInLogo} alt="LinkedIn" />
          </a>
          <a href="/contact">
            <Logo src={TwitterLogo} alt="Twitter" />
          </a>
          <a href="/contact">
            <Logo src={YouTubeLogo} alt="YouTube" />
          </a>
        </Logos>
      </Content>
      <Footer />
    </Container>
  );
};
