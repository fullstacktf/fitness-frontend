import * as React from 'react';
import styled from '@emotion/styled';
import { HashLink } from 'react-router-hash-link';

export interface NavbarElementProps {
  text: string;
  link: string;
  color?: string;
  onClick?: () => void;
}

const Element = styled.li`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const LinkContainer = styled.div`
  a {
    text-decoration: none;
    color: ${(props) => (props.color ? props.color : 'black')};
  }
`;

export const NavbarElement: React.FC<NavbarElementProps> = ({
  text,
  link,
  color,
  onClick,
}: NavbarElementProps): JSX.Element => {
  return (
    <Element>
      <LinkContainer color={color}>
        <HashLink to={link} onClick={onClick}>
          {text}
        </HashLink>
      </LinkContainer>
    </Element>
  );
};
