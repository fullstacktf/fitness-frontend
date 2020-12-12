import * as React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background: #f89d9d 0% 0% no-repeat padding-box;
  margin: 0;
  padding: 20px;
`;

const Button = styled.a`
  color: #ce3131;
  text-decoration: none;
  padding: 15px 20px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 10px;
`;

export const Hero: React.FC = (): JSX.Element => {
  return (
    <Container>
      <img src="" alt="" />
      <h1>Fulfill Your Goals</h1>
      <p>
        Say hello to the new app that helps you build the body you wish to have!
        You do the hard work, we track your results and tell you how amazing you
        are.
      </p>
      {/* TODO: Adequate link */}
      <Button href="##">
        <span>Register</span>
      </Button>
    </Container>
  );
};
