import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { ContactPage } from './ContactPage';

export default {
  title: 'Components/Layout/ContactPage',
  component: ContactPage,
} as Meta;

export const Primary: React.VFC = () => <ContactPage />;
