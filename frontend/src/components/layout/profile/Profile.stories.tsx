import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Profile } from './Profile';

export default {
  title: 'Components/Layout/Profile',
  component: Profile,
} as Meta;

export const Primary: React.VFC = () => <Profile />;
