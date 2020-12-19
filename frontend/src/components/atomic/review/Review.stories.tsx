import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Review, ReviewProps } from './Review';

export default {
  title: 'Components/Atomic/Review',
  component: Review,
} as Meta;

const Template: Story<ReviewProps> = (args) => <Review {...args} />;

export const Primary = Template.bind({});
