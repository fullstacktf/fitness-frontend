import * as React from 'react';

export interface NavbarElementProps {
  imageRoute?: string;
  text: string;
  link: string;
}

export const NavbarElement: React.FC<NavbarElementProps> = ({
  imageRoute,
  text,
  link,
}: NavbarElementProps): JSX.Element => {
  return (
    <li>
      <img src={imageRoute} alt="" />
      <a href={link}>{text}</a>
    </li>
  );
};
