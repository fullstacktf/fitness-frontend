import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { RegisterForm } from '../RegisterForm';

describe('RegisterForm', () => {
  describe('Render', () => {
    test('Should test Register text exists', () => {
      render(<RegisterForm />);

      const registerText = screen.getByLabelText('Register Title');
      expect(registerText).toBeInTheDocument();
    });

    test('Should test email TextField exists', () => {
      render(<RegisterForm />);
    });

    test('Should test password TextField exists', () => {
      render(<RegisterForm />);
    });

    test('Should test Register Button exists', () => {
      render(<RegisterForm />);

      const registerButton = screen.getAllByText('Register');
      expect(registerButton[1]).toBeInTheDocument();
    });

    test('Should test account text exists', () => {
      render(<RegisterForm />);

      const newUsertext = screen.getByText('Already have an account?');
      expect(newUsertext).toBeInTheDocument();
    });

    test('Should test Sign-In Button exists', () => {
      render(<RegisterForm />);
      const signInButton = screen.getByText('Sign-In');
      expect(signInButton).toBeInTheDocument();
    });
  });
});
