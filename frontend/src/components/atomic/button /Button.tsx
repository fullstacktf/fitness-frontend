import * as React from 'react';
import styled from '@emotion/styled';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Container = styled.button`
  ${tw`flex justify-center items-center p-4 rounded-lg
text-white m-2 w-10/12 h-9`};
  font-family: Inter;
  background: #ce3131 0% 0% no-repeat padding-box;
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
