import * as React from 'react';
import { Button } from '../button /Button';
import { TextField } from '../text-field/TextField';
import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 0.1vh solid #aaaaaa;
  border-radius: 0.4vh;
  opacity: 1;
  width: 40vh;
  height: 35vh;
`;

const Title = styled.div`
  text-align: left;
  width: 85%;
  font: normal normal bold 3.4vh/4.3vh Inter V;
  letter-spacing: 0vh;
  color: #1b1b1b;
  opacity: 1;
  margin: 0.5vh;
`;

const SignIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const SignInLink = styled.a`
  width: 80%;
  height: 1.6vh;
  text-align: left;
  font: normal normal normal 1.2vh/1.6vh Inter V;
  letter-spacing: 0vh;
  color: #1b1b1b;
  opacity: 1;
  text-decoration: none;
`;

export const RegisterForm = (): JSX.Element => {
  return (
    <Form>
      <Title aria-label="Register Title">Register</Title>
      <TextField text="Email" type="email" />
      <TextField text="Password" type="password" />
      <Button label="Register" />
      <SignIn>
        <SignInLink href="">Already have an account?</SignInLink>
        <Button label="Sign-In" />
      </SignIn>
    </Form>
  );
};
