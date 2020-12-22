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

const RoutineContainer = styled.div`
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

const BaseRoutineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
`;

const ExercisesContainer = styled.div`
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

const BaseExercisesContainer = styled.div`
  display: flex;
  align-content: center;
  padding: 3vh;
  margin-top: 3vh;
  box-shadow: 0vh 0vh 1.2vh #00000029;
  color: #ffffff;
  width: fit-content;
  .selectExercise {
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

interface SelectedBaseExercise {
  value: string;
  label: string;
}

interface BaseRoutineObject {
  ID: number;
  CategoryID: number;
  Name: string;
  Description: string;
}

interface RoutineExercise {
  ID: string;
}

export const RoutineCrudPanel: React.FC = () => {
  const customSelectStyle = {
    option: (provided: any, state: any) => ({
      ...provided,

      color: state.isSelected ? 'white' : 'black',
      background: state.isSelected ? '#ce3131' : 'white',
    }),
  };

  const [baseRoutine, setBaseRoutine] = React.useState<BaseRoutineObject>({
    ID: 0,
    CategoryID: 0,
    Description: '',
    Name: '',
  });

  const [exercises, setExercises] = React.useState<RoutineExercise[]>([]);

  const [baseExercises, setBaseExercises] = React.useState<
    SelectedBaseExercise[]
  >([{ value: '', label: '' }]);

  const [
    selectedBaseExercise,
    setSelectedBaseExercise,
  ] = React.useState<SelectedBaseExercise>({
    value: '',
    label: '',
  });

  const searchParams: any = new URLSearchParams(useLocation().search);

  const parseRoutineExercises = () => {
    const result = exercises.map((element: RoutineExercise) => {
      return {
        ID: element.ID,
      };
    });
    return result;
  };

  const getBaseRoutine = (): Promise<any> => {
    axios.defaults.withCredentials = true;
    return axios
      .get(CURRENT_URL + '/v1/baseRoutine/' + searchParams.get('id'), {})
      .then((response) => response.data)
      .catch((error) => error);
  };

  const getBaseExercises = (): Promise<any> => {
    axios.defaults.withCredentials = true;
    return axios
      .post(CURRENT_URL + '/v1/baseExercise/filter', {})
      .then((response) => response.data)
      .catch((error) => error);
  };

  React.useEffect(() => {
    getBaseRoutine().then((data) => {
      if (data === Error) {
      } else {
        setBaseRoutine(data);
        setExercises(data.BaseExercises);
      }
    });
  }, []);

  React.useEffect(() => {
    getBaseExercises().then((data) => {
      if (data === Error) {
        console.log(data);
      } else {
        const result: SelectedBaseExercise[] = [];
        data.forEach((element: any) => {
          result.push({
            label: element.Name,
            value: element.ID,
          });
        });
        setBaseExercises(result);
      }
    });
  }, []);

  const handleChange = (e: any) => {
    setSelectedBaseExercise(e);
  };

  const updateExercises = (): Promise<any> => {
    axios.defaults.withCredentials = true;
    return axios
      .put(CURRENT_URL + '/v1/baseRoutine/', {
        ID: baseRoutine.ID,
        CategoryID: baseRoutine.CategoryID,
        Name: baseRoutine.Name,
        Description: baseRoutine.Description,
        BaseExercises: parseRoutineExercises(),
      })
      .then((response) => window.location.reload())
      .catch((error) => error);
  };

  const assignExercise = () => {
    exercises.push({ ID: selectedBaseExercise.value });
    updateExercises();
  };

  const removeExercise = (id: string) => {
    for (let index = 0; index < exercises.length; index++) {
      if (exercises[index].ID === id) {
        exercises.splice(index, 1);
      }
    }
    updateExercises();
  };

  return (
    <Container>
      <Navbar />
      <RoutineContainer>
        <BaseRoutineContainer>{baseRoutine.Name}</BaseRoutineContainer>
        <BaseExercisesContainer>
          <Select
            className="selectExercise"
            onChange={handleChange}
            value={selectedBaseExercise}
            options={baseExercises}
            isClearable={true}
            isSearchable={true}
            styles={customSelectStyle}
          ></Select>
          <Button
            label="Add exercise"
            onClick={() => assignExercise()}
          ></Button>
        </BaseExercisesContainer>
        <ExercisesContainer>
          {exercises.map((value: any, index) => {
            return (
              <ListRow key={index}>
                <ButtonContainer>
                  <Button
                    label="X"
                    onClick={() => removeExercise(value.ID)}
                  ></Button>
                </ButtonContainer>
                <RoutineName>{value.Name}</RoutineName>
                <RoutineDescription>{value.Description}</RoutineDescription>
              </ListRow>
            );
          })}
        </ExercisesContainer>
      </RoutineContainer>
    </Container>
  );
};
