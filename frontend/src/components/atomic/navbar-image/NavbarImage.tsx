import * as React from 'react';
import styled from '@emotion/styled';

export interface NavbarImageProps {
  imageRoute: string;
  link: string;
  alt?: string;
}

const Element = styled.li`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  text-decoration: none;
`;

const Logo = styled.img`
  height: 2.3vh;
`;

export const NavbarImage: React.FC<NavbarImageProps> = (
  NavbarImageProps
): JSX.Element => {
  return (
    <Element>
      <Link href={NavbarImageProps.link}>
        <Logo src={NavbarImageProps.imageRoute} alt={NavbarImageProps.alt} />
      </Link>
    </Element>
  );
};
