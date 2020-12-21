import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Routine, RoutineProps } from './Routine';

export default {
  title: 'Components/Atomic/Routine',
  component: Routine,
} as Meta;

const Template: Story<RoutineProps> = (args) => <Routine {...args} />;

export const Primary = Template.bind({});
