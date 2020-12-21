import * as React from 'react';
import styled from '@emotion/styled';
import { HashLink } from 'react-router-hash-link';

export interface DynamicListProps {
  objs: unknown[];
  idObject: string;
  link: string;
}

const Container = styled.div`
  margin-top: 2vh;
  font: normal normal bold 2.5vh/4vh Inter;
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
  padding: 2vh;
  a {
    text-decoration: none;
    color: #ffffff;
  }
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

function getListContent(objs: any[]): ObjectPropertyDef[] {
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

  return properties;
}

export const DynamicList: React.FC<DynamicListProps> = ({
  objs,
  idObject,
  link,
}: DynamicListProps): JSX.Element => {
  const properties: ObjectPropertyDef[] = getListContent(objs);
  return (
    <Container>
      <ListContainer>
        <tbody>
          <ListHeader>
            {properties.map((value, index) => {
              const result: JSX.Element[] = [];
              result.push(
                <ListHeaderItem key={index}>{value.name}</ListHeaderItem>
              );
              return result;
            })}
          </ListHeader>
          {objs.map((value: any, index) => {
            const result: JSX.Element[] = [];
            for (let i = 0; i < properties.length; i++) {
              result.push(
                <ListItem key={i}>
                  {link ? (
                    <HashLink
                      to={
                        link +
                        '?' +
                        idObject.toLowerCase() +
                        '=' +
                        value[String(idObject)]
                      }
                    >
                      {String(Object.values(value)[properties[i].index])
                        ? String(Object.values(value)[properties[i].index])
                        : '-'}
                    </HashLink>
                  ) : (
                    <div>
                      {String(Object.values(value)[properties[i].index])
                        ? String(Object.values(value)[properties[i].index])
                        : '-'}
                    </div>
                  )}
                </ListItem>
              );
            }
            return <ListRow key={index}>{result}</ListRow>;
          })}
        </tbody>
      </ListContainer>
    </Container>
  );
};
