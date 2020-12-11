import * as React from 'react';
import { Feature } from '../../atomic/feature/Feature';

export const FeaturePanel: React.FC = (): JSX.Element => {
  return (
    <div>
      <h1>Why use YouLift?</h1>
      <h2>
        Explore below to see why YouLift is a simple and powerful fitness
        routine manager.
      </h2>
      <Feature
        screenshotRoute=""
        title="Forget The Boring Stuff"
        description="ashfjsdhfskdlahasdhflasfaskjfhsaklfjashflsadfhlssajkfh"
      />
      <Feature
        screenshotRoute=""
        title="Forget The Boring Stuff"
        description="ashfjsdhfskdlahasdhflasfaskjfhsaklfjashflsadfhlssajkfh"
      />
      <Feature
        screenshotRoute=""
        title="Forget The Boring Stuff"
        description="ashfjsdhfskdlahasdhflasfaskjfhsaklfjashflsadfhlssajkfh"
      />
    </div>
  );
};
