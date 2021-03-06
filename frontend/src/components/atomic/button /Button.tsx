import * as React from 'react';
import styled from '@emotion/styled';

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1vh;
  border-radius: 1vh;
  opacity: 1;
  width: 33.3vh;
  height: 3.8vh;
  background: #ce3131 0% 0% no-repeat padding-box;
  color: white;
  margin: 1vh;
  border: none;
  outline: none;
  cursor: pointer;
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
