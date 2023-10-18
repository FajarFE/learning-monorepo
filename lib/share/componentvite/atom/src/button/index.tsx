import React from 'react';

export interface ButtonProps {
  text?: string;
  className?: string;
}
export const Button: React.FC<ButtonProps> = ({ text, className }) => {
  return <button className={`${className}`}>{text}</button>;
};
