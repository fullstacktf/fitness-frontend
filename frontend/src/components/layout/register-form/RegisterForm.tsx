import * as React from 'react';
import { Button } from '../../atomic/button /Button';
import { TextField } from '../../atomic/text-field/TextField';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { CURRENT_URL } from '../../../utils/utils';
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

const SignInLink = styled.div`
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
