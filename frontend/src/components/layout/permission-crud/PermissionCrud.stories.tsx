import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { PermissionCrud } from './PermissionCrud';

export default {
  title: 'Components/layout/ExerciseCategoryCrud',
  component: PermissionCrud,
} as Meta;

export const Primary: React.VFC = () => <PermissionCrud />;
