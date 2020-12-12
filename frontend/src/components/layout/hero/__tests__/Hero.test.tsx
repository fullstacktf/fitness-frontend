import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Hero } from '../Hero';

describe('Hero', () => {
  describe('Render', () => {
    test('Should test Hero exist', () => {
      render(<Hero />);
      const hero = screen.getByText('Fulfill Your Goals');
      expect(hero).toBeInTheDocument();
    });
  });
});
