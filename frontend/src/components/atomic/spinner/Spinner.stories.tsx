import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Spinner, SpinnerProps } from './Spinner';

export default {
  title: 'Components/atomic/Spinner',
  component: Spinner,
} as Meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
