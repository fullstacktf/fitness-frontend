import * as React from 'react';
import styled from '@emotion/styled';

export interface DynamicListProps {
  objs: unknown[];
}

const Container = styled.div`
  margin-top: 10vh;
  font: normal normal bold 3.5vh/4vh Inter;
  color: #ffffff;
  box-shadow: 0vh 0vh 1.2vh #00000029;
  padding: 2vh;
`;

const ListContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const ListHeader = styled.tr`
  color: #000000;
  background-color: #ffffff;
  padding: 3vh;
`;

const ListHeaderItem = styled.td`
  padding: 2.5vh;
  text-align: center;
`;

const ListRow = styled.tr`
  width: 100%;
  text-align: center;
  box-shadow: 0vh 0vh 1.2vh #00000029;
  background-color: #ce3131;
`;

const ListItem = styled.td`
  color: #ffffff;
  padding: 2vh;
`;

function checkPropertyName(property: ObjectPropertyDef) {
  const name = property.name.toLowerCase();
  if (typeof property.value === 'string') {
    if (name === 'updatedat' || name === 'deletedat' || name === 'createdat') {
      return false;
    } else {
      return true;
    }
  } else if (typeof property.value === 'number') {
    if (name === 'id' || name === 'categoryid') return false;
    else return true;
  }
}

class ObjectPropertyDef {
  index: number;
  name: string;
  value: unknown;

  constructor(index: number, name: string, value: unknown) {
    this.index = index;
    this.name = name;
    this.value = value;
  }
}

function getListContent(objs: any[]): JSX.Element {
  const properties: ObjectPropertyDef[] = [];

  const objectProps = Object.getOwnPropertyNames(objs[0]);

  for (let index = 0; index < objectProps.length; index++) {
    const property = new ObjectPropertyDef(
      index,
      objectProps[index],
      Object.values(objs[0])[index]
    );
    if (checkPropertyName(property)) {
      properties.push(property);
    }
  }

  return (
    <ListContainer>
      <ListHeader>
        {properties.map((value, index) => {
          const result: JSX.Element[] = [];
          result.push(
            <ListHeaderItem key={index}>
              {objectProps[value.index]}
            </ListHeaderItem>
          );
          return result;
        })}
      </ListHeader>
      {objs.map((value, index) => {
        const result: JSX.Element[] = [];
        for (let i = 0; i < properties.length; i++) {
          result.push(
            <ListItem key={index}>
              {String(Object.values(value)[properties[i].index])}
            </ListItem>
          );
        }
        return <ListRow key={index}>{result}</ListRow>;
      })}
    </ListContainer>
  );
}

export const DynamicList: React.FC<DynamicListProps> = ({
  objs,
}: DynamicListProps): JSX.Element => {
  return <Container>{getListContent(objs)}</Container>;
};
