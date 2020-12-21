import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MusclePanel, MusclePanelProps } from './MusclePanel';

export default {
  title: 'Components/Atomic/MusclePanel',
  component: MusclePanel,
} as Meta;

const Template: Story<MusclePanelProps> = (args) => <MusclePanel {...args} />;

export const Primary = Template.bind({});
