import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { RoutinePanel } from './RoutinePanel';

export default {
  title: 'Components/Layout/RoutinePanel',
  component: RoutinePanel,
} as Meta;

export const Primary: React.VFC = () => <RoutinePanel />;
