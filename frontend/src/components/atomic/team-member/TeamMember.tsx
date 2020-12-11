import * as React from 'react';

export interface TeamMemberProps {
  pictureRoute: string;
  fullName: string;
  role: string;
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  pictureRoute,
  fullName,
  role,
}: TeamMemberProps): JSX.Element => {
  return (
    <div>
      <img src={pictureRoute} alt="" />
      <h1>{fullName}</h1>
      <p>{role}</p>
    </div>
  );
};
