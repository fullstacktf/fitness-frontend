import * as React from 'react';
import styled from '@emotion/styled';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

export interface NavbarImageProps {
  imageRoute: string;
  link: string;
  alt?: string;
}
const Element = styled.li`
  ${tw`flex justify-center items-center`};
`;
const Link = styled.a`
  ${tw`no-underline`};
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
