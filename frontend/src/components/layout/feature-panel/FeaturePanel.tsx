import * as React from 'react';
import { Feature } from '../../atomic/feature/Feature';
import styled from '@emotion/styled';
import ProfilePicture from './assets/profileYouLift.png';
import RoutinePicture from './assets/routineYouLift.png';
import ExerciseItemPicture from './assets/exerciseItemYouLift.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4vh 0;
`;

const Title = styled.h1`
  text-align: center;
  font: normal normal bold 2.8vh/3vh Inter;
  letter-spacing: 0vh;
  color: #1b1b1b;
  opacity: 1;
`;

const Subtitle = styled.h2`
  text-align: center;
  font: normal normal normal 2vh/3vh Inter;
  letter-spacing: 0px;
  color: #1b1b1b;
  opacity: 1;
`;

export const FeaturePanel: React.FC = () => {
  return (
    <Container id="why">
      <Title>Why use YouLift?</Title>
      <Subtitle>
        Explore below to see why YouLift is a simple and powerful fitness
        routine manager.
      </Subtitle>
      <Feature
        screenshotRoute={ProfilePicture}
        title="Forget The Boring Stuff"
        description="You won't need to calculate how much time to rest, the amount of weight you need to lift, or what is the amount of cardio you need to do. We will handle all of this for you! Just remember, you still need to do the hard work."
      />
      <Feature
        screenshotRoute={RoutinePicture}
        title="Know your Routines"
        description="We assign you a default routine, but you can choose another one. Don't stick to routines that don't fit to you anymore!"
        reverse
      />
      <Feature
        screenshotRoute={ExerciseItemPicture}
        title="Do the Exercises Properly"
        description="With our thorough descriptions, you won't injure yourself ever again for doing the exercises not well enough. You will be able to see which muscles are involved and how to do those exercises safely."
      />
    </Container>
  );
};
