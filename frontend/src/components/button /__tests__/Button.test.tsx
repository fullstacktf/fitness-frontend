import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  describe('Render', () => {
    test('Debería renderizar un botón con texto Register', () => {
      render(<Button label="Register" />);
      const registerButtonText = screen.getByText('Register');
      expect(registerButtonText).toBeInTheDocument();
    });
  });
});
