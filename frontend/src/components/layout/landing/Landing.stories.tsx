import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Landing } from './Landing';

export default {
  title: 'Components/Layout/Landing',
  component: Landing,
} as Meta;

export const Primary: React.VFC = () => <Landing />;
