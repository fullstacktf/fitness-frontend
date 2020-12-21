import * as React from 'react';
import styled from '@emotion/styled';
import { DynamicList } from '../dynamic-list/DynamicList';
import axios from 'axios';
import { CURRENT_URL } from '../../../utils/utils';
import { Navbar } from '../navbar/Navbar';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2vh;
  margin-top: 10vh;
  font: normal normal bold 2.5vh/4vh Inter;
  color: #ffffff;
  box-shadow: 0vh 0vh 1.2vh #00000029;
  padding: 2vh;
`;

const CrudTitle = styled.span`
  color: #000000;
`;

export const ExerciseCategoryCrud = (): JSX.Element => {
  const [execiseCategories, setExerciseCategory] = React.useState([{}]);
  const getExerciseCategory = (): Promise<any> => {
    axios.defaults.withCredentials = true;
    return axios
      .post(CURRENT_URL + '/v1/exerciseCategory/filter', {})
      .then((response) => response.data)
      .catch((error) => error);
  };

  React.useEffect(() => {
    getExerciseCategory().then((data) => {
      if (data === Error) {
        console.log(data);
      } else {
        setExerciseCategory(data);
      }
    });
  }, []);

  return (
    <Container>
      <Navbar />
      <ListContainer>
        <CrudTitle>
          <h1>Exercise categories</h1>
        </CrudTitle>
        <DynamicList objs={execiseCategories} idObject="id" link="" />
      </ListContainer>
    </Container>
  );
};
