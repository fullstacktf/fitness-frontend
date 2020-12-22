import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { NavbarElement, NavbarElementProps } from './NavbarElement';

export default {
  title: 'Components/Atomic/NavbarElement',
  component: NavbarElement,
} as Meta;

const Template: Story<NavbarElementProps> = (args) => (
  <NavbarElement {...args} />
);

export const Primary = Template.bind({});
