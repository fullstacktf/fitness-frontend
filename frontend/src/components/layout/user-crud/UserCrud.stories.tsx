import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { UserCrud } from './UserCrud';

export default {
  title: 'Components/layout/ExerciseCategoryCrud',
  component: UserCrud,
} as Meta;

export const Primary: React.VFC = () => <UserCrud />;
