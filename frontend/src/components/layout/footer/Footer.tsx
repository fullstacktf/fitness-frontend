import * as React from 'react';
import styled from '@emotion/styled';

const Container = styled.div<FooterProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 2.5vh;
  background: #ce3131 0% 0% no-repeat padding-box;
  opacity: 1;

  position: ${(props) => (props.position ? props.position : 'absolute')};
  bottom: 0;
  width: 100%;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 70%;
  font-size: 2vh;
  text-align: center;
  font: italic normal 300 1.2vh/1.6vh Inter;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

export interface FooterProps {
  position?: string;
}

export const Footer: React.FC<FooterProps> = (FooterProps): JSX.Element => {
  return (
    <Container position={FooterProps.position}>
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
