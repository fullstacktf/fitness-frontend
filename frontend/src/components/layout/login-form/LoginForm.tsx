import * as React from 'react';
import axios from 'axios';
import { Button } from '../../atomic/button /Button';
import { TextField } from '../../atomic/text-field/TextField';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { CURRENT_URL } from '../../../utils/utils';
import { Spinner } from '../../atomic/spinner/Spinner';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Form = styled.form`
  ${tw`flex justify-center items-center flex-col border border-gray-300
 rounded-sm w-72`};
  background: #ffffff 0% 0% no-repeat padding-box;
`;

const Title = styled.div`
  ${tw`text-left tracking-normal w-10/12 m-0.5`};
  font: normal normal bold 3.4vh/4.3vh Inter;
`;

const Submit = styled.div`
  ${tw`flex justify-center items-center flex-col w-full my-1.5`};
`;

const RegisterLink = styled.div`
  ${tw`flex justify-center items-start w-full`};
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
  ${tw`flex justify-center items-start flex-col w-4/5`};
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
      .post(CURRENT_URL + '/login', formData)
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
