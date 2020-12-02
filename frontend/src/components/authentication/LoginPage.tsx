import * as React from 'react';
import { AuthenticationButton } from './AuthenticationButton';
import { AuthenticationTextField } from './AuthenticationTextField';

export const LoginPage = () => {
  return (
    <div>
      <h1>YouLift</h1>
      <div id="cuadrado">
        <h2>Sign In</h2>
        <AuthenticationTextField text="Email" type="email"/>
        <AuthenticationTextField text="Password" type="password"/>
        <AuthenticationButton label="Register"/>
        <p>Are you new to YouLift?</p>
        <AuthenticationButton label="Login"/>
      </div>
    </div>
  );
};
