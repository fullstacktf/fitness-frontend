import * as React from 'react';
import { Button } from '../../atomic/button /Button';
import { TextField } from '../../atomic/text-field/TextField';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { CURRENT_URL } from '../../../utils/utils';
import { Spinner } from '../../atomic/spinner/Spinner';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Form = styled.form`
  ${tw`flex justify-center items-center flex-col border border-gray-300
 rounded-sm w-96`};
  background: #ffffff 0% 0% no-repeat padding-box;
`;

const Title = styled.div`
  ${tw`text-left tracking-normal w-10/12 m-0.5`};
  font: normal normal bold 3.4vh/4.3vh Inter;
`;

const Submit = styled.div`
  ${tw`flex justify-center items-center flex-col w-full my-1.5`};
`;

const SignInLink = styled.div`
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
  DNI: string;
  Name: string;
  Surname: string;
  Email: string;
  Phone: string;
  Birthdate: string;
  Address: string;
};

export const RegisterForm = (): JSX.Element => {
  const history = useHistory();

  const [isRegistering, setIsRegistering] = React.useState(false);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: FormParams) => {
    setIsRegistering(true);

    data.Birthdate = data.Birthdate + 'T00:00:00Z';

    axios.defaults.withCredentials = true;
    axios
      .post(CURRENT_URL + '/register', JSON.stringify(data))
      .then(() => {
        setIsRegistering(false);
        history.push('/login');
      })
      .catch((error) => {
        setIsRegistering(false);
        console.log(error);
      });
  };

  return (
    <Form>
      <Title aria-label="Register Title">Register</Title>
      <TextField
        text="Name"
        type="text"
        register={register({ required: 'Name Required' })}
      />
      <ErrorContainer>
        {errors.Name && <Error>* {errors.Name.message}</Error>}
      </ErrorContainer>
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
        text="Birthdate"
        type="date"
        register={register({ required: 'Birthdate Required' })}
      />
      <ErrorContainer>
        {errors.Birthdate && <Error>* {errors.Birthdate.message}</Error>}
      </ErrorContainer>
      <TextField text="Address" type="text" register={register} />
      <ErrorContainer>
        {errors.Address && <Error>* {errors.Address.message}</Error>}
      </ErrorContainer>
      <Submit>
        <SignInLink>
          <Link to="/login">Already have an account?</Link>
        </SignInLink>
        <Button label="Register" onClick={handleSubmit(onSubmit)} />
      </Submit>
      <Spinner state={isRegistering} />
    </Form>
  );
};
