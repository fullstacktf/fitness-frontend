import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Login } from './Login';

export default {
  title: 'Components/Login',
  component: Login,
} as Meta;

export const Primary: React.VFC = () => <Login />;
