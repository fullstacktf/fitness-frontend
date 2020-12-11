import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { TextField, TextFieldProps } from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Primary = Template.bind({});
