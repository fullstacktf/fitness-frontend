import * as React from 'react';
import { RegisterForm } from '../register-form/RegisterForm';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  font: normal normal bold 5vh/6vh Inter V;
  margin-top: 15vh;
  margin-bottom: 3vh;
`;

export const Register: React.FC = () => {
  return (
    <Container>
      <Title>YouLift</Title>
      <RegisterForm />
    </Container>
  );
};
