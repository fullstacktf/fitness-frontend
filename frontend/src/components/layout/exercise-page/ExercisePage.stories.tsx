import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ExercisePage } from './ExercisePage';

export default {
  title: 'Components/Layout/ExercisePage',
  component: ExercisePage,
} as Meta;

export const Primary: React.VFC = () => <ExercisePage />;
