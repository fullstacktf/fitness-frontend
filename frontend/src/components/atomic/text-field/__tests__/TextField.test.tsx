import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { TextField } from '../TextField';

describe('TextField', () => {
  describe('Render', () => {
    test('Should test TextField exists', () => {
      render(<TextField text="Test" type="text" />);

      const textField = screen.getByText('Test');
      expect(textField).toBeInTheDocument();
    });

    test('Should test TextField exists renders the correct text', () => {
      render(<TextField text="Register" type="text" />);

      const textField = screen.getByText('Register');
      expect(textField.textContent).toBe('Register');
    });

    test('Should test TextField has the correct type', () => {
      render(<TextField text="Register" type="text" />);

      const textbox = screen.getByRole('textbox');
      expect(textbox).toBeInTheDocument();
    });
  });
});
