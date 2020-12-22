import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { BaseExerciseCrud } from './BaseExerciseCrud';

export default {
  title: 'Components/layout/BaseExerciseCrud',
  component: BaseExerciseCrud,
} as Meta;

export const Primary: React.VFC = () => <BaseExerciseCrud />;
