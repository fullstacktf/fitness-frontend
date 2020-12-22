import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { RoutineCategoryCrud } from './RoutineCategoryCrud';

export default {
  title: 'Components/layout/ExerciseCategoryCrud',
  component: RoutineCategoryCrud,
} as Meta;

export const Primary: React.VFC = () => <RoutineCategoryCrud />;
