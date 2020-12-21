import * as React from 'react';
import { LoginForm } from '../login-form/LoginForm';
import styled from '@emotion/styled';
import { isLogged } from '../../../utils/utils';
import { useHistory } from 'react-router-dom';
import { Navbar } from '../navbar/Navbar';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`flex items-center flex-col w-full h-full`};
`;

const Title = styled.div`
  ${tw`w-full text-center mt-28 mb-6`};
  font: normal normal bold 5vh/6vh Inter;
`;

export const Login: React.FC = () => {
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
      <LoginForm />
    </Container>
  );
};
