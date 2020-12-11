import * as React from 'react';
import { TeamMember } from '../../atomic/team-member/TeamMember';

export const TeamMemberPanel: React.FC = (): JSX.Element => {
  return (
    <div>
      <h1>The Team</h1>
      <h2>These are the guys responsible for developing the app.</h2>
      <TeamMember
        pictureRoute=""
        fullName="Kevin David Cabrera Díaz"
        role="Fullstack Developer"
      />
      <TeamMember
        pictureRoute=""
        fullName="Raúl Rodríguez Torres"
        role="Fullstack Developer"
      />
      <TeamMember
        pictureRoute=""
        fullName="Kevin Antonio Suárez Sánchez"
        role="Fullstack Developer"
      />
      <TeamMember
        pictureRoute=""
        fullName="Pablo Pérez Pérez"
        role="Fullstack Developer"
      />
    </div>
  );
};
