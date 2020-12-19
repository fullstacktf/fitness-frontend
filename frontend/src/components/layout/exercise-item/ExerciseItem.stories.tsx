import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ExerciseItem } from './ExerciseItem';

export default {
  title: 'Components/Layout/ExerciseItem',
  component: ExerciseItem,
} as Meta;

export const Primary: React.VFC = () => <ExerciseItem />;
