import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { UserCrudPanel } from './UserCrudPanel';

export default {
  title: 'Components/layout/ExerciseCategoryCrud',
  component: UserCrudPanel,
} as Meta;

export const Primary: React.VFC = () => <UserCrudPanel />;
