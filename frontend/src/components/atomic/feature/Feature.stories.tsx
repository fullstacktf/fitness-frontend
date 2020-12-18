import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Feature, FeatureProps } from './Feature';

export default {
  title: 'Components/Atomic/Feature',
  component: Feature,
} as Meta;

const Template: Story<FeatureProps> = (args) => <Feature {...args} />;

export const Primary = Template.bind({});
