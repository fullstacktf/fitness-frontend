import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { RoleCrud } from './RoleCrud';

export default {
  title: 'Components/layout/ExerciseCategoryCrud',
  component: RoleCrud,
} as Meta;

export const Primary: React.VFC = () => <RoleCrud />;
