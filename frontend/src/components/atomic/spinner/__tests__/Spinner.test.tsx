import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Spinner } from '../Spinner';

describe('Spinnerw', () => {
  describe('Render', () => {
    test('Debería renderizar', () => {
      render(<Spinner state={true} />);
      const spinner = screen.getByRole('alert');
      expect(spinner).toBeInTheDocument();
    });
  });
});
