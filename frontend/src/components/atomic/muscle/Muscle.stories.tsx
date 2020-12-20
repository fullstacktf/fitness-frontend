import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Muscle, MuscleProps } from './Muscle';

export default {
  title: 'Components/Atomic/Muscle',
  component: Muscle,
} as Meta;

const Template: Story<MuscleProps> = (args) => <Muscle {...args} />;

export const Primary = Template.bind({});
