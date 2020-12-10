import * as React from 'react';

export interface TextFieldProps {
  text: string;
  type: 'text' | 'email' | 'password';
}

export const TextField: React.FC<TextFieldProps> = ({
  text,
  type,
}: TextFieldProps) => {
  return (
    <div>
      <p>{text}</p>
      <input type={type} />
    </div>
  );
};
