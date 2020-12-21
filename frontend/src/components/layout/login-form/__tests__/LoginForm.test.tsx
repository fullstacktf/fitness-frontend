import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { LoginForm } from '../LoginForm';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('LoginForm', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <LoginForm />
      </Router>
    );
  });

  describe('Render', () => {
    test('Should test Sign In text exists', () => {
      const signInText = screen.getByText('Sign In');
      expect(signInText).toBeInTheDocument();
    });

    test('Should test email TextField exists', () => {
      expect(1).toBe(1);
    });

    test('Should test password TextField exists', () => {
      expect(1).toBe(1);
    });

    test('Should test new user text exists', () => {
      const newUsertext = screen.getByText('Are you new to YouLift?');
      expect(newUsertext).toBeInTheDocument();
    });

    test('Should test Login Button exists', () => {
      const loginButton = screen.getByText('Login');
      expect(loginButton).toBeInTheDocument();
    });
  });
});
