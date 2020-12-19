import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { RoutineItem } from './RoutineItem';

export default {
  title: 'Components/Layout/RoutineItem',
  component: RoutineItem,
} as Meta;

export const Primary: React.VFC = () => <RoutineItem />;
