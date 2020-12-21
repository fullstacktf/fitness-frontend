import * as React from 'react';
import Workout from './assets/working_out.svg';
import styled from '@emotion/styled';

const Container = styled.div`
  background: #f89d9d;
  margin: 0;
  padding: 8vh 24vh;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  align-items: center;
  height: 70vh;
  color: #1b1b1b;
`;

const H1 = styled.h1`
  font: normal normal bold 6vh/8vh Inter;
  width: 51vh;
  margin-bottom: 1vh;
`;

const Paragraph = styled.p`
  font: normal normal normal 2.4vh/3.2vh Inter;
  width: 51vh;
  word-wrap: wrap;
  margin-top: 0;
  margin-bottom: 3vh;
`;

const Image = styled.img`
  width: 72vh;
  height: 39.3vh;
`;

const Button = styled.a`
  color: #ce3131;
  text-decoration: none;
  padding: 1.5vh 3.5vh;
  background: #ffffff 0% 0% no-repeat padding-box;
  font: normal normal normal 2vh/2.7vh Inter V;
  border-radius: 1vh;
`;

export const Hero: React.FC = (): JSX.Element => {
  return (
    <Container>
      <div>
        <Image src={Workout} alt="" />
      </div>
      <div>
        <H1>Fulfill Your Goals</H1>
        <Paragraph>
          Say hello to the new app that helps you build the body you wish to
          have! You do the hard work, we track your results and tell you how
          amazing you are.
        </Paragraph>
        <Button href="/register">
          <span>Register</span>
        </Button>
      </div>
    </Container>
  );
};
