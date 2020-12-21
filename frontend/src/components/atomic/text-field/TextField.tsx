import * as React from 'react';
import styled from '@emotion/styled';
import 'tailwindcss/dist/base.min.css';
import tw from 'twin.macro';

const Label = styled.label`
  font: normal normal bold 1.6vh/2.1vh Inter;
  letter-spacing: 0vh;
  color: #1b1b1b;
  opacity: 1;
  margin: 0.5vh 0vh;
`;

const Input = styled.input`
  width: 33.2vh;
  height: 3.2vh;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 0.1vh solid #707070;
  border-radius: 0.4vh;
  opacity: 1;
`;
const TextContainer = styled.div`
  ${tw`flex items-center justify-between`};
`;

const LINK = styled.a`
  ${tw`tracking-normal no-underline`};
  font: normal normal normal 1.2vh/1.6vh Inter;
  color: #3182ce;
`;

export interface TextFieldProps {
  text: string;
  type: 'text' | 'email' | 'password' | 'date' | 'datetime-local';
  linkText?: string;
  link?: string;
  register?: any;
}

export const TextField: React.FC<TextFieldProps> = (TextFieldProps) => {
  return (
    <div>
      <TextContainer>
        <Label htmlFor={TextFieldProps.text}>{TextFieldProps.text}</Label>
        <LINK href={TextFieldProps.link}>{TextFieldProps.linkText}</LINK>
      </TextContainer>
      <Input
        name={TextFieldProps.text}
        type={TextFieldProps.type}
        ref={TextFieldProps.register}
      />
    </div>
  );
};
