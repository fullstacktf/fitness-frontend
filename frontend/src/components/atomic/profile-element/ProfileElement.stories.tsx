import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ProfileElement, ProfileElementProps } from './ProfileElement';

export default {
  title: 'Components/atomic/ProfileElement',
  component: ProfileElement,
} as Meta;

const Template: Story<ProfileElementProps> = (args) => (
  <ProfileElement {...args} />
);

export const Primary = Template.bind({});
