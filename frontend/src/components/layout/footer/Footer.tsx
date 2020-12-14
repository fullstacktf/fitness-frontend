import * as React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 2.5vh;
  background: #ce3131 0% 0% no-repeat padding-box;
  opacity: 1;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 70%;
  font-size: 2vh;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

export const Footer: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Box>
        <p>&copy; {new Date().getFullYear()} YouLift</p>
        <div>
          <Link href="##">Terms</Link> | <Link href="##">Privacy</Link> |{' '}
          <Link href="##">Contact</Link>
        </div>
      </Box>
    </Container>
  );
};
