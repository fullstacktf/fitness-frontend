import * as React from 'react';
import styled from '@emotion/styled';
import { DynamicList } from '../dynamic-list/DynamicList';
import axios from 'axios';
import { DEVELOPMENT_URL } from '../../../utils/utils';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`w-full h-full`};
`;

export const UserCrud = (): JSX.Element => {
  const [users, setUsers] = React.useState([{}]);
  const getUsers = (): Promise<any> => {
    axios.defaults.withCredentials = true;
    return axios
      .post(DEVELOPMENT_URL + '/v1/user/all', {})
      .then((response) => response.data)
      .catch((error) => error);
  };

  React.useEffect(() => {
    getUsers().then((data) => {
      if (data === Error) {
        console.log(data);
      } else {
        setUsers(data);
      }
    });
  }, []);

  return (
    <Container>
      <DynamicList objs={users} />
    </Container>
  );
};
