import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { DropdownCrud } from './DropdownCrud';

export default {
  title: 'Components/Layout/DropdownCrud',
  component: DropdownCrud,
} as Meta;

export const Primary: React.VFC = () => <DropdownCrud />;
