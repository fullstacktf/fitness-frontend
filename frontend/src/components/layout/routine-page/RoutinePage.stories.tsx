import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { RoutinePage } from './RoutinePage';

export default {
  title: 'Components/Layout/RoutinePage',
  component: RoutinePage,
} as Meta;

export const Primary: React.VFC = () => <RoutinePage />;
