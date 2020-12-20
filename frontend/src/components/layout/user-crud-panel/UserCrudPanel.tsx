import * as React from 'react';
import styled from '@emotion/styled';
import { DEVELOPMENT_URL } from '../../../utils/utils';
import axios from 'axios';
import { Navbar } from '../navbar/Navbar';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
`;

export const UserCrudPanel = (): JSX.Element => {
  const [user, setUser] = React.useState([{}]);

  const searchParams: any = new URLSearchParams(useLocation().search);

  const getUser = (): Promise<any> => {
    axios.defaults.withCredentials = true;
    return axios
      .get(DEVELOPMENT_URL + '/v1/user/' + searchParams.get('id'), {})
      .then((response) => response.data)
      .catch((error) => error);
  };

  React.useEffect(() => {
    getUser().then((data) => {
      if (data === Error) {
        console.log(data);
      } else {
        console.log(data);
        setUser(data);
      }
    });
  }, []);

  return (
    <Container>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {Object.values(user)[4]}
    </Container>
  );
};
