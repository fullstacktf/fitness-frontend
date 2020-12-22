import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ItemHeader, ItemHeaderProps } from './ItemHeader';

export default {
  title: 'Components/Atomic/ItemHeader',
  component: ItemHeader,
} as Meta;

const Template: Story<ItemHeaderProps> = (args) => <ItemHeader {...args} />;

export const Primary = Template.bind({});
