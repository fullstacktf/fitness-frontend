import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Login } from '../Login';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('Login', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Login />
      </Router>
    );
  });

  describe('Render', () => {
    test('Should test YouLift text exists', () => {
      const youliftText = screen.getByText('YouLift');
      expect(youliftText).toBeInTheDocument();
    });
  });
});
