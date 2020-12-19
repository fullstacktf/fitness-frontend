import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ExercisePanel } from './ExercisePanel';

export default {
  title: 'Components/Layout/ExercisePanel',
  component: ExercisePanel,
} as Meta;

export const Primary: React.VFC = () => <ExercisePanel />;
