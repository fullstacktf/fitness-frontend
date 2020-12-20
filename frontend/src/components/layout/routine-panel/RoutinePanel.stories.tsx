import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { RoutinePanel, RoutinePanelProps } from './RoutinePanel';

export default {
  title: 'Components/Layout/RoutinePanel',
  component: RoutinePanel,
} as Meta;

const Template: Story<RoutinePanelProps> = (args) => <RoutinePanel {...args} />;

export const Primary = Template.bind({});
