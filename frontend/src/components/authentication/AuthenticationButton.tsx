import * as React from 'react';
import styled from '@emotion/styled';

const Container = styled.button`
  background: ${props => props.color};
  text-align: center;
  padding: 10px;
`;

interface AuthenticationButtonProps {
  label?: string;
  onClick?: () => void;
}

export const AuthenticationButton: React.FC<AuthenticationButtonProps> = ({
  label,
  onClick
}) => {
  return <Container onClick={onClick}>{label}</Container>;
};
