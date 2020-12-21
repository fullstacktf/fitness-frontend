import * as React from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import {
  CURRENT_URL,
  getUserInformation,
  getUserStats,
} from '../../../utils/utils';
import { Spinner } from '../spinner/Spinner';

export interface ProfileElementProps {
  imageRoute: string;
  name: string;
  height: string;
  weight: string;
  bio: string;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
  height: 17.5vh;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0vh 0vh 1.2vh #00000029;
  opacity: 1;
  width: 100%;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0vh 5vh;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 9.5vh;
  margin: 2vh;
  border: 0.1vh solid #707070;
  opacity: 1;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`;

const Name = styled.input`
  text-align: left;
  font: normal normal bold 2.2vh/3.3vh Inter;
  letter-spacing: 0vh;
  color: #1b1b1b;
  opacity: 1;
  :read-only {
    border: none;
    background: inherit;
  }
`;

const Data = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.4vh;
`;

const Datas = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const Input = styled.input`
  text-align: left;
  font: normal normal normal 1.4vh/3vh Inter;
  letter-spacing: 0vh;
  color: #1b1b1b;
  opacity: 1;
  :read-only {
    border: none;
    background: inherit;
  }
`;

const Label = styled.label`
  text-align: left;
  font: normal normal normal 1.4vh/3vh Inter;
  letter-spacing: 0vh;
  color: #1b1b1b;
  opacity: 1;
`;

const Biography = styled.textarea`
  word-wrap: wrap;
  text-align: left;
  font: normal normal normal 1.4vh/2vh Inter;
  letter-spacing: 0vh;
  color: #1b1b1b;
  opacity: 1;
  width: 100%;
  height: 10vh;
  resize: none;
  :read-only {
    border: none;
    background: inherit;
  }
`;

const BiographyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 30%;
  margin-right: 20vh;
`;

const Button = styled.button`
  background: #ce3131;
  color: white;
  border: 1px solid #1b1b1b;
  padding: 0;
`;

export const ProfileElement: React.FC<ProfileElementProps> = (
  ProfileElementProps
) => {
  const [blockEdit, setBlockEdit] = React.useState(true);
  const [name, setName] = React.useState(String);
  const [height, setHeight] = React.useState(String);
  const [weight, setWeight] = React.useState(String);
  const [biography, setBiography] = React.useState(String);
  const [isSaving, setIsSaving] = React.useState(false);

  React.useEffect(() => {
    setName(ProfileElementProps.name);
    setBiography(ProfileElementProps.bio);
    setHeight(ProfileElementProps.height);
    setWeight(ProfileElementProps.weight);
  }, [ProfileElementProps]);

  const isEditting = async () => {
    if (blockEdit) {
      setBlockEdit(false);
    } else {
      setBlockEdit(true);
      updateUser();
    }
  };

  const updateUser = () => {
    setIsSaving(true);
    getUserInformation().then((user) => {
      user.Name = name;
      user.Biography = biography;
      axios
        .put(CURRENT_URL + `/v1/user/${user.ID}`, user)
        .then(() => setIsSaving(false))
        .catch((error) => {
          setIsSaving(false);
          console.log(error);
        });
    });

    getUserStats().then((stats) => {
      stats.Height = Number(height);
      stats.LastWeight = Number(weight);
      axios
        .put(CURRENT_URL + `/v1/userStat/${stats.UserID}`, stats)
        .then(() => setIsSaving(false))
        .catch((error) => {
          setIsSaving(false);
          console.log(error);
        });
    });
  };

  const onChange = (
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setValue(value);
  };

  return (
    <Container>
      <Box>
        <ProfilePicture
          src={ProfileElementProps.imageRoute}
          alt="Profile Picture"
        />
        <Content>
          <Name
            readOnly={blockEdit}
            disabled={blockEdit}
            value={name}
            onChange={(e) => onChange(e.target.value, setName)}
          />
          <Datas>
            <Data>
              <Label>Height: </Label>
              <Input
                type="number"
                readOnly={blockEdit}
                disabled={blockEdit}
                value={height}
                onChange={(e) => onChange(e.target.value, setHeight)}
              />
            </Data>
            <Data>
              <Label>Weight: </Label>
              <Input
                type="number"
                readOnly={blockEdit}
                disabled={blockEdit}
                value={weight}
                onChange={(e) => onChange(e.target.value, setWeight)}
              />
            </Data>
          </Datas>
        </Content>
      </Box>
      <BiographyContainer>
        <Content>
          <Label>Bio:</Label>
          <Biography
            maxLength={150}
            readOnly={blockEdit}
            disabled={blockEdit}
            value={biography}
            onChange={(e) => onChange(e.target.value, setBiography)}
          />
        </Content>
      </BiographyContainer>
      <Button onClick={isEditting}>Edit Profile</Button>
      <Spinner state={isSaving} />
    </Container>
  );
};
