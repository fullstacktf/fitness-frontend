import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Landing } from '../Landing';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('Landing', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Landing />
      </Router>
    );
  });
  describe('Render', () => {
    test('Should test Landing exist', () => {
      const landing = screen.getByRole('application');
      expect(landing).toBeInTheDocument();
    });
  });
});
