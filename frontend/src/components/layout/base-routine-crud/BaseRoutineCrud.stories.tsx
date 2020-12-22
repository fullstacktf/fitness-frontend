import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { BaseRoutineCrud } from './BaseRoutineCrud';

export default {
  title: 'Components/layout/BaseRoutineCrud',
  component: BaseRoutineCrud,
} as Meta;

export const Primary: React.VFC = () => <BaseRoutineCrud />;
