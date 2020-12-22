import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { UserRoutinePanel, UserRoutinePanelProps } from './UserRoutinePanel';

export default {
  title: 'Components/Layout/RoutinePanel',
  component: UserRoutinePanel,
} as Meta;

const Template: Story<UserRoutinePanelProps> = (args) => (
  <UserRoutinePanel {...args} />
);

export const Primary = Template.bind({});
