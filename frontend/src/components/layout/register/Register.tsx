import * as React from 'react';
import { RegisterForm } from '../register-form/RegisterForm';
import styled from '@emotion/styled';
import { Navbar } from '../navbar/Navbar';
import { useHistory } from 'react-router-dom';
import { isLogged } from '../../../utils/utils';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  font: normal normal bold 5vh/6vh Inter;
  margin-top: 15vh;
  margin-bottom: 3vh;
`;

export const Register: React.FC = () => {
  const history = useHistory();

  React.useEffect(() => {
    if (isLogged()) {
      history.push('/');
    }
  });

  return (
    <Container>
      <Navbar />
      <Title>YouLift</Title>
      <RegisterForm />
    </Container>
  );
};
