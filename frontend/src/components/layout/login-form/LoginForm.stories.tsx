import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { LoginForm } from './LoginForm';

export default {
  title: 'Components/Layout/LoginForm',
  component: LoginForm,
} as Meta;

export const Primary: React.VFC = () => <LoginForm />;
