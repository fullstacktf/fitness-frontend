import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { FilterPanel, FilterPanelProps } from './FilterPanel';

export default {
  title: 'Components/Atomic/FilterPanel',
  component: FilterPanel,
} as Meta;

const Template: Story<FilterPanelProps> = (args) => <FilterPanel {...args} />;

export const Primary = Template.bind({});
