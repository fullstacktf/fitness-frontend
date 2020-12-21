import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { RoutineExercise, RoutineExerciseProps } from './RoutineExercise';

export default {
  title: 'Components/atomic/RoutineExercise',
  component: RoutineExercise,
} as Meta;

const Template: Story<RoutineExerciseProps> = (args) => (
  <RoutineExercise {...args} />
);

export const Primary = Template.bind({});
