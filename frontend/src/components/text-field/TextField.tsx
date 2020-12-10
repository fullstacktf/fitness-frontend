import * as React from 'react';

interface TextFieldProps {
  text: string;
  type: 'text' | 'email' | 'password';
}

export const TextField: React.FC<TextFieldProps> = ({ text, type }) => {
  return (
    <div>
      <p>{text}</p>
      <input type={type} />
    </div>
  );
};
