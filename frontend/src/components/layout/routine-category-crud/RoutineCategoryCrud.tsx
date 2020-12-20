import * as React from 'react';
import styled from '@emotion/styled';
import { DynamicList } from '../dynamic-list/DynamicList';
import axios from 'axios';
import { DEVELOPMENT_URL } from '../../../utils/utils';
import { Navbar } from '../navbar/Navbar';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ListContainer = styled.div`
  padding: 2vh;
`;

export const RoutineCategoryCrud = (): JSX.Element => {
  const [routineCategories, setRoutineCategory] = React.useState([{}]);
  const getRoutineCategory = (): Promise<any> => {
    axios.defaults.withCredentials = true;
    return axios
      .post(DEVELOPMENT_URL + '/v1/routineCategory/filter', {})
      .then((response) => response.data)
      .catch((error) => error);
  };

  React.useEffect(() => {
    getRoutineCategory().then((data) => {
      if (data === Error) {
        console.log(data);
      } else {
        setRoutineCategory(data);
      }
    });
  }, []);

  return (
    <Container>
      <Navbar />
      <ListContainer>
        <DynamicList objs={routineCategories} idObject="id" link="/" />
      </ListContainer>
    </Container>
  );
};
