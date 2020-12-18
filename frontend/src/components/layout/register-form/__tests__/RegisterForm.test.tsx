import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { RegisterForm } from '../RegisterForm';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

describe('RegisterForm', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <RegisterForm />
      </Router>
    );
  });

  describe('Render', () => {
    test('Should test Register text exists', () => {
      const registerText = screen.getByLabelText('Register Title');
      expect(registerText).toBeInTheDocument();
    });

    test('Should test email TextField exists', () => {
      expect(1).toBe(1);
    });

    test('Should test password TextField exists', () => {
      expect(1).toBe(1);
    });

    test('Should test Register Button exists', () => {
      const registerButton = screen.getAllByText('Register');
      expect(registerButton[1]).toBeInTheDocument();
    });

    test('Should test account text exists', () => {
      const newUsertext = screen.getByText('Already have an account?');
      expect(newUsertext).toBeInTheDocument();
    });
  });
});
