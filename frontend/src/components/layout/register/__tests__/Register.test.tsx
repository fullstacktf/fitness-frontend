import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Register } from '../Register';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('Register', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Register />
      </Router>
    );
  });

  describe('Render', () => {
    test('Should test YouLift text exists', () => {
      const youliftText = screen.getByText('YouLift');
      expect(youliftText).toBeInTheDocument();
    });

    // TODO: Should test RegisterForm exists
  });
});
