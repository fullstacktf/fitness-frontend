import * as React from 'react';
import styled from '@emotion/styled';
import { CURRENT_URL } from '../../../utils/utils';
import axios from 'axios';
import { Navbar } from '../navbar/Navbar';
import { useLocation } from 'react-router-dom';
import { Button } from '../../atomic/button /Button';
import Select from 'react-select';

const Container = styled.div`
  justify-content: center;
  align-content: center;
  width: 100%;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
  margin: 2vh;
  margin-top: 10vh;
  font: normal normal bold 2.5vh/4vh Inter;
  box-shadow: 0vh 0vh 1.2vh #00000029;
  padding: 2vh;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 1vh;
`;

const RoutinesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 1vh;
  margin-top: 3vh;
  box-shadow: 0vh 0vh 1.2vh #00000029;
  color: #ffffff;
`;

const ListRow = styled.tr`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  box-shadow: 0vh 0vh 1.2vh #00000029;
  background-color: #ce3131;
  padding: 2vh;
`;

const RoutineName = styled.div`
  color: #000000;
  font-size: 1.5em;
`;
const RoutineDescription = styled.div`
  padding-top: 2vh;
`;

const AssignRoutinesContainer = styled.div`
  display: flex;
  align-content: center;
  padding: 3vh;
  margin-top: 3vh;
  box-shadow: 0vh 0vh 1.2vh #00000029;
  color: #ffffff;
  width: fit-content;
  .selectRoutine {
    width: 35vw;
    color: #00000029;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: center;
  Button {
    margin: 0px;
    width: 1vw;
    height: 1vh;
    font-weight: bold;
    font-size: 2vw;
  }
`;
interface User {
  ID: number;
  Name: string;
  Address: string;
  Email: string;
  Phone: string;
  DNI: string;
}

interface AssignedRoutine {
  ID: string;
  Name: string;
}

interface RoutineObject {
  value: string;
  label: string;
}

export const UserCrudPanel = (): JSX.Element => {
  const customSelectStyle = {
    option: (provided: any, state: any) => ({
      ...provided,

      color: state.isSelected ? 'white' : 'black',
      background: state.isSelected ? '#ce3131' : 'white',
    }),
  };

  const [user, setUser] = React.useState<User>({
    ID: 0,
    Name: '',
    Address: '',
    Email: '',
    Phone: '',
    DNI: '',
  });
  const [assignedRoutines, setAssignedRoutines] = React.useState<
    [AssignedRoutine]
  >([
    {
      ID: '',
      Name: '',
    },
  ]);
  const [routines, setRoutines] = React.useState<RoutineObject[]>([
    {
      value: '',
      label: '',
    },
  ]);
  const [selectedRoutine, setSelectedRoutine] = React.useState<RoutineObject>({
    value: '',
    label: '',
  });

  const searchParams: any = new URLSearchParams(useLocation().search);

  const getUser = (): Promise<any> => {
    axios.defaults.withCredentials = true;
    return axios
      .get(CURRENT_URL + '/v1/user/' + searchParams.get('id'), {})
      .then((response) => response.data)
      .catch((error) => error);
  };

  const getAssignedRoutines = (): Promise<any> => {
    axios.defaults.withCredentials = true;
    return axios
      .get(
        CURRENT_URL + '/v1/assignedRoutine/0/byUser/' + searchParams.get('id'),
        {}
      )
      .then((response) => response.data)
      .catch((error) => error);
  };

  const getRoutines = (): Promise<any> => {
    axios.defaults.withCredentials = true;
    return axios
      .post(CURRENT_URL + '/v1/baseRoutine/filter', {})
      .then((response) => response.data)
      .catch((error) => error);
  };

  React.useEffect(() => {
    getUser().then((data) => {
      if (data === Error) {
        console.log(data);
      } else {
        setUser(data);
      }
    });

    getRoutines().then((data) => {
      if (data === Error) {
        console.log(data);
      } else {
        const result: RoutineObject[] = [];
        data.forEach((element: any) => {
          result.push({ label: element.Name, value: element.ID });
        });
        setRoutines(result);
      }
    });
  }, []);

  React.useEffect(() => {
    getAssignedRoutines().then((data) => {
      if (data === Error) {
        console.log(data);
      } else {
        setAssignedRoutines(data);
      }
    });
  }, []);

  const assignRoutine = (): Promise<any | null> => {
    axios.defaults.withCredentials = true;
    return axios
      .post(CURRENT_URL + '/v1/assignedRoutine/', {
        UserID: user.ID,
        BaseRoutineID: selectedRoutine.value,
      })
      .then((response) => window.location.reload())
      .catch((error) => error);
  };

  const handleChange = (e: any) => {
    setSelectedRoutine(e);
  };

  const removeRoutine = (id: string): Promise<any> => {
    axios.defaults.withCredentials = true;
    return axios
      .delete(CURRENT_URL + '/v1/assignedRoutine/' + id)
      .then((response) => window.location.reload())
      .catch((error) => error);
  };

  return (
    <Container>
      <Navbar />
      <UserContainer>
        <ColumnContainer>
          <Column>
            <div>Name: {user.Name}</div>
            <div>DNI: {user.DNI}</div>
            <div>Address: {user.Address}</div>
          </Column>
          <Column>
            <div>E-mail: {user.Email}</div>
            <div>Phone: {user.Phone}</div>
          </Column>
        </ColumnContainer>
        <AssignRoutinesContainer>
          <Select
            className="selectRoutine"
            onChange={handleChange}
            value={selectedRoutine}
            options={routines}
            isClearable={true}
            isSearchable={true}
            styles={customSelectStyle}
          ></Select>
          <Button label="Add routine" onClick={() => assignRoutine()}></Button>
        </AssignRoutinesContainer>
        <RoutinesContainer>
          {assignedRoutines.map((value: any, index) => {
            return (
              <ListRow key={index}>
                <ButtonContainer>
                  <Button
                    label="X"
                    onClick={() => removeRoutine(value.ID)}
                  ></Button>
                </ButtonContainer>
                <RoutineName>{value.Name}</RoutineName>
                <RoutineDescription>{value.Description}</RoutineDescription>
              </ListRow>
            );
          })}
        </RoutinesContainer>
      </UserContainer>
    </Container>
  );
};
