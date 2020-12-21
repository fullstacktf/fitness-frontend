import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { FeaturePanel } from '../FeaturePanel';

describe('FeaturePanel', () => {
  describe('Render', () => {
    test('Should test title exists', () => {
      render(<FeaturePanel />);
      const title = screen.getByText('Why use YouLift?');
      expect(title).toBeInTheDocument();
    });

    test('Should test subtitle exists', () => {
      render(<FeaturePanel />);
      const subtitle = screen.getByText(
        'Explore below to see why YouLift is a simple and powerful fitness routine manager.'
      );
      expect(subtitle).toBeInTheDocument();
    });
  });
});
