import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from '../Navbar';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('Navbar', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Navbar />
      </Router>
    );
  });

  describe('Render', () => {
    test('Should test logo exists', () => {
      const logo = screen.getByAltText('YouLift Logo');
      expect(logo).toBeInTheDocument();
    });

    test('Should test navbar elements container exists', () => {
      const container = screen.getByRole('list');
      expect(container).toBeInTheDocument();
    });
  });
});
