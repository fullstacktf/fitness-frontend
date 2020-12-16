import * as React from 'react';
import styled from '@emotion/styled';

export interface NavbarElementProps {
  text: string;
  link: string;
  color?: string;
}

const Element = styled.li`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${(props) => (props.color ? props.color : 'black')};
`;

export const NavbarElement: React.FC<NavbarElementProps> = ({
  text,
  link,
  color,
}: NavbarElementProps): JSX.Element => {
  return (
    <Element>
      <Link href={link} color={color}>
        {text}
      </Link>
    </Element>
  );
};
