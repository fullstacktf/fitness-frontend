import * as React from 'react';
import { Feature } from '../../atomic/feature/Feature';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  font: normal normal normal 20px/30px Inter V;
  letter-spacing: 0px;
  color: #1b1b1b;
  opacity: 1;
`;

export const FeaturePanel: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Title>Why use YouLift?</Title>
      <Subtitle>
        Explore below to see why YouLift is a simple and powerful fitness
        routine manager.
      </Subtitle>
      <Feature
        screenshotRoute=""
        title="Forget The Boring Stuff"
        description="You won't need to calculate how much time to rest, the amount of weight you need to lift, or what is the amount of cardio you need to do. We will handle all of this for you! Just remember, you still need to do the hard work."
      />
      <Feature
        screenshotRoute=""
        title="Sound Notifications and Alarms"
        description="We will tell you when rest time is over, when to stop running, and when it is time to go to the gym. Until you hear the sound... Run, Forrest, Run!"
        reverse
      />
      <Feature
        screenshotRoute=""
        title="Forget The Boring Stuff"
        description="You won't need to calculate how much time to rest, the amount of weight you need to lift, or what is the amount of cardio you need to do. We will handle all of this for you! Just remember, you still need to do the hard work."
      />
    </Container>
  );
};
