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
  margin: 0vh 1vh;
`;

const LinkContainer = styled.div`
  a {
    text-decoration: none;
    color: ${(props) => (props.color ? props.color : 'black')};
  }
`;

export const NavbarElement: React.FC<NavbarElementProps> = (
  NavbarElementProps
): JSX.Element => {
  return (
    <Element>
      <LinkContainer color={NavbarElementProps.color}>
        <HashLink
          to={NavbarElementProps.link}
          onClick={NavbarElementProps.onClick}
        >
          {NavbarElementProps.text}
        </HashLink>
      </LinkContainer>
    </Element>
  );
};
