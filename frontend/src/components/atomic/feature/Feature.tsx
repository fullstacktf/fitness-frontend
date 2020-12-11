import * as React from 'react';

export interface FeatureProps {
  screenshotRoute: string;
  title: string;
  description: string;
}

export const Feature: React.FC<FeatureProps> = ({
  screenshotRoute,
  title,
  description,
}: FeatureProps): JSX.Element => {
  return (
    <div>
      <img src={screenshotRoute} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
