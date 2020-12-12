import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { NavbarImage, NavbarImageProps } from './NavbarImage';

export default {
  title: 'Components/atomic/NavbarImage',
  component: NavbarImage,
} as Meta;

const Template: Story<NavbarImageProps> = (args) => <NavbarImage {...args} />;

export const Primary = Template.bind({});
