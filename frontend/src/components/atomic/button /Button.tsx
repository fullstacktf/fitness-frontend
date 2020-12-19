import * as React from 'react';
import styled from '@emotion/styled';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Container = styled.button`
  ${tw`bg-red-600 flex justify-center rounded-lg
text-white m-2 w-1/12 h-1/6`};
  font-family: Inter;
`;

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (ButtonProps) => {
  return (
    <Container onClick={ButtonProps.onClick}>{ButtonProps.label}</Container>
  );
};
