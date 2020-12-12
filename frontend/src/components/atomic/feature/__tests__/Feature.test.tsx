import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Feature } from '../Feature';

describe('Feature', () => {
  describe('Render', () => {
    test('Debería renderizar', () => {
      render(<Feature screenshotRoute="" title="bew" description="" />);
      const feature = screen.getByText('bew');
      expect(feature).toBeInTheDocument();
    });
  });
});
