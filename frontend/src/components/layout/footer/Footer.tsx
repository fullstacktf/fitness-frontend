import * as React from 'react';

export const Footer: React.FC = (): JSX.Element => {
  return (
    <div>
      <p>&copy; {new Date().getFullYear()} YouLift</p>
      <div>
        <a href="##">Terms</a> | <a href="##">Privacy</a> |{' '}
        <a href="##">Contact</a>
      </div>
    </div>
  );
};
