import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { DynamicList, DynamicListProps } from './DynamicList';

export default {
  title: 'Components/Layout/DynamicList',
  component: DynamicList,
} as Meta;

const Template: Story<DynamicListProps> = (args) => <DynamicList {...args} />;

export const Primary = Template.bind({});
