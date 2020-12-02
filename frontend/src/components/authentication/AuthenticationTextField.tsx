import * as React from 'react';

interface AuthenticationTextFieldProps {
  text: string;
  type: 'text' | 'email' | 'password';
}

export const AuthenticationTextField: React.FC<AuthenticationTextFieldProps> = ({
  text,
  type
}) => {
  return (
    <div>
      <p>{text}</p>
      <input type={type}/>
    </div>
  );
};
