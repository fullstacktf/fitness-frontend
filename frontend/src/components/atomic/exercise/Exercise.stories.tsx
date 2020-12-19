import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Exercise, ExerciseProps } from './Exercise';

export default {
  title: 'Components/Atomic/Exercise',
  component: Exercise,
} as Meta;

const Template: Story<ExerciseProps> = (args) => <Exercise {...args} />;

export const Primary = Template.bind({});
