import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { TeamMemberPanel } from '../TeamMemberPanel';

describe('TeamMemberPanel', () => {
  describe('Render', () => {
    test('Should test TeamMemberPanel exist', () => {
      render(<TeamMemberPanel />);
      const teamMemberPanel = screen.getByText('The Team');
      expect(teamMemberPanel).toBeInTheDocument();
    });
  });
});
