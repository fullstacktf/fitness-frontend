import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { RoutineCrudPanel } from './RoutineCrudPanel';

export default {
  title: 'Components/layout/ExerciseCategoryCrud',
  component: RoutineCrudPanel,
} as Meta;

export const Primary: React.VFC = () => <RoutineCrudPanel />;
