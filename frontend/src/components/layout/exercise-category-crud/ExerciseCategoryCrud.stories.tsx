import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ExerciseCategoryCrud } from './ExerciseCategoryCrud';

export default {
  title: 'Components/layout/ExerciseCategoryCrud',
  component: ExerciseCategoryCrud,
} as Meta;

export const Primary: React.VFC = () => <ExerciseCategoryCrud />;
