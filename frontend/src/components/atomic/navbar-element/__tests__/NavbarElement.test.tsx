import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { NavbarElement } from '../NavbarElement';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('NavbarElement', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <NavbarElement link="#" text="Test Link" />
      </Router>
    );
  });
  describe('Render', () => {
    test('Should test link text exists', () => {
      const text = screen.getByText('Test Link');
      expect(text).toBeInTheDocument();
    });

    test('Should test link exists', () => {
      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
    });
  });
});
