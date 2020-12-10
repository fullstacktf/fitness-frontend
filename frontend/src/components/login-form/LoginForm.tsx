import * as React from 'react';
import { Button } from '../button /Button';
import { TextField } from '../text-field/TextField';
import styled from '@emotion/styled';

const form = styled.form`
  top: 225px;
  left: 754px;
  width: 412px;
  height: 383px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #aaaaaa;
  border-radius: 4px;
  opacity: 1;
`;

export const LoginForm = (): JSX.Element => {
  return (
    <form>
      <h2>Sign In</h2>
      <TextField text="Email" type="email" />
      <TextField text="Password" type="password" />
      <Button label="Login" />
      <p>Are you new to YouLift?</p>
      <Button label="Register" />
    </form>
  );
};
