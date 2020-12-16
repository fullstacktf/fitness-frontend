import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Feature } from '../Feature';

describe('Feature', () => {
  describe('Render', () => {
    test('Should test screenshot exists', () => {
      render(
        <Feature
          screenshotRoute=""
          title="Test"
          description="Description test"
        />
      );
      const screenshot = screen.getByRole('img');
      expect(screenshot).toBeInTheDocument();
    });

    test('Should test title exists', () => {
      render(
        <Feature
          screenshotRoute=""
          title="Test"
          description="Description test"
        />
      );
      const title = screen.getByText('Test');
      expect(title).toBeInTheDocument();
    });

    test('Should test description exists', () => {
      render(
        <Feature
          screenshotRoute=""
          title="Test"
          description="Description test"
        />
      );
      const description = screen.getByText('Description test');
      expect(description).toBeInTheDocument();
    });
  });
});
