import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { TeamMember } from '../TeamMember';

describe('TeamMember', () => {
  describe('Render', () => {
    test('Debería renderizar el TeamMember', () => {
      render(<TeamMember pictureRoute="" fullName="bew" role="" />);
      const teamMember = screen.getByText('bew');
      expect(teamMember).toBeInTheDocument();
    });
  });
});
