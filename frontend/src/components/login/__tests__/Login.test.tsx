import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Login } from '../Login';

describe('Login', () => {
  beforeEach(() => {
    render(<Login />);
  });

  describe('Render', () => {
    test('Should test YouLift text exists', () => {
      const youliftText = screen.getByText('YouLift');
      expect(youliftText).toBeInTheDocument();
    });

    test('Should test LoginForm exists', () => {});
  });
});
