import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Description, DescriptionProps } from './Description';

export default {
  title: 'Components/Atomic/Description',
  component: Description,
} as Meta;

const Template: Story<DescriptionProps> = (args) => <Description {...args} />;

export const Primary = Template.bind({});
