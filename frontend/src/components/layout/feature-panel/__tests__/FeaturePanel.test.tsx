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

    test('Should test its has at least one Feature', () => {
      render(<FeaturePanel />);
      const title = screen.getByText('Sound Notifications and Alarms');
      const description = screen.getByText(
        'We will tell you when rest time is over, when to stop running, and when it is time to go to the gym. Until you hear the sound... Run, Forrest, Run!'
      );
      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });
});
