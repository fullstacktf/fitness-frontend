import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { RegisterForm } from './RegisterForm';

export default {
  title: 'Components/RegisterForm',
  component: RegisterForm,
} as Meta;

export const Primary: React.VFC = () => <RegisterForm />;
