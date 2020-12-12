import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { FeaturePanel } from '../FeaturePanel';

describe('FeaturePanel', () => {
  describe('Render', () => {
    test('Should test FeaturePanel exists', () => {
      render(<FeaturePanel />);
      const featurePanel = screen.getByText('Why use YouLift?');
      expect(featurePanel).toBeInTheDocument();
    });
  });
});
