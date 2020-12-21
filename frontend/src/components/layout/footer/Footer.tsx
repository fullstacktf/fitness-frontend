import * as React from 'react';
import styled from '@emotion/styled';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`flex items-center justify-end h-6`};
  background: #ce3131 0% 0% no-repeat padding-box;
`;

const Box = styled.div`
  ${tw`flex justify-around items-center h-full tracking-normal
 `};
  font: italic normal 300 1.2vh/1.6vh Inter;
  color: #ffffff;
  width: 70%;
`;
const Link = styled.a`
  ${tw`no-underline `};
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
