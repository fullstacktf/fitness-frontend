import * as React from 'react';
import axios from 'axios';
import { Button } from '../../atomic/button /Button';
import { TextField } from '../../atomic/text-field/TextField';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { DEVELOPMENT_URL } from '../../../utils/utils';
import { Spinner } from '../../atomic/spinner/Spinner';

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 0.1vh solid #aaaaaa;
  border-radius: 0.4vh;
  opacity: 1;
  width: 40vh;
`;

const Title = styled.div`
  text-align: left;
  width: 85%;
  font: normal normal bold 3.4vh/4.3vh Inter;
  letter-spacing: 0vh;
  color: #1b1b1b;
  opacity: 1;
  margin: 0.5vh;
`;

const Submit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 1vh 0vh;
`;

const RegisterLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  a {
    width: 80%;
    height: 1.6vh;
    text-align: left;
    font: normal normal normal 1.2vh/1.6vh Inter V;
    letter-spacing: 0vh;
    color: #1b1b1b;
    opacity: 1;
    text-decoration: none;
  }
`;

const Error = styled.span`
  font-size: 1vh;
  color: red;
`;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 80%;
  min-height: 2vh;
`;

type FormParams = {
  Email: string;
  Password: string;
};

export const LoginForm = (): JSX.Element => {
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  const [isLogging, setIsLogging] = React.useState(false);

  const onSubmit = (data: FormParams) => {
    const formData = new FormData();

    setIsLogging(true);

    formData.append('username', data.Email);
    formData.append('password', data.Password);

    axios.defaults.withCredentials = true;
    axios
      .post(DEVELOPMENT_URL + '/login', formData)
      .then(() => {
        setIsLogging(false);
        history.push('/');
      })
      .catch((error) => {
        setIsLogging(false);
        console.log(error);
      });
  };

  return (
    <Form>
      <Title>Sign In</Title>
      <TextField
        text="Email"
        type="email"
        register={register({
          required: 'Email Required',
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: 'Invalid email address',
          },
        })}
      />
      <ErrorContainer>
        {errors.Email && <Error>* {errors.Email.message}</Error>}
      </ErrorContainer>
      <TextField
        text="Password"
        type="password"
        link=""
        linkText="Forgot your password?"
        register={register({ required: 'Password Required' })}
      />
      <ErrorContainer>
        {errors.Password && <Error>* {errors.Password.message}</Error>}
      </ErrorContainer>
      <Submit>
        <RegisterLink>
          <Link to="/register">Are you new to YouLift?</Link>
        </RegisterLink>
        <Button label="Login" onClick={handleSubmit(onSubmit)} />
      </Submit>
      <Spinner state={isLogging} />
    </Form>
  );
};
