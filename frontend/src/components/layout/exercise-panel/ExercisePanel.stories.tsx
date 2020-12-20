import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ExercisePanel, ExercisePanelProps } from './ExercisePanel';

export default {
  title: 'Components/Layout/ExercisePanel',
  component: ExercisePanel,
} as Meta;

const Template: Story<ExercisePanelProps> = (args) => (
  <ExercisePanel {...args} />
);

export const Primary = Template.bind({});
