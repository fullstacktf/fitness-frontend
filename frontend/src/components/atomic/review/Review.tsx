import * as React from 'react';

export interface ReviewProps {
  picture: string;
  text: string;
  author: string;
  role: string;
}

export const Review: React.FC<ReviewProps> = ({
  picture,
  text,
  author,
  role,
}: ReviewProps): JSX.Element => {
  return (
    <div>
      <img src={picture} alt="" />
      <h1>{text}</h1>
      <h2>{author}</h2>
      <h3>{role}</h3>
    </div>
  );
};
