import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Navbar } from './Navbar';

export default {
  title: 'Components/Layout/Navbar',
  component: Navbar,
} as Meta;

export const Primary: React.VFC = () => <Navbar />;
