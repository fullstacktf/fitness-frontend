import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Register } from '../Register';

describe('Register', () => {
  beforeEach(() => {
    render(<Register />);
  });

  describe('Render', () => {
    test('Should test YouLift text exists', () => {
      const youliftText = screen.getByText('YouLift');
      expect(youliftText).toBeInTheDocument();
    });

    test('Should test RegisterForm exists', () => {});
  });
});
