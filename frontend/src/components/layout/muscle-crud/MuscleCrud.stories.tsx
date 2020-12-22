import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { MuscleCrud } from './MuscleCrud';

export default {
  title: 'Components/layout/ExerciseCategoryCrud',
  component: MuscleCrud,
} as Meta;

export const Primary: React.VFC = () => <MuscleCrud />;
