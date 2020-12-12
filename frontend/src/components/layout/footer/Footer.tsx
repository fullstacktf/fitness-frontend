import * as React from 'react';
import styled from '@emotion/styled';

const Container = styled.div``;

export const Footer: React.FC = (): JSX.Element => {
  return (
    <Container>
      <p>&copy; {new Date().getFullYear()} YouLift</p>
      <div>
        <a href="##">Terms</a> | <a href="##">Privacy</a> |{' '}
        <a href="##">Contact</a>
      </div>
    </Container>
  );
};
