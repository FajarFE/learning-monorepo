import React from 'react';

export interface HeadCardProps {
  title?: string;
  subtitle?: string;
  className?: string;
  titleStyle?: string;
  subtitleStyle?: string;
}

export const HeadCard: React.FC<HeadCardProps> = ({
  title,
  subtitle,
  className,
  titleStyle,
  subtitleStyle,
}) => {
  return (
    <div
      className={`${className} flex flex-col gap-5 justify-center items-center`}
    >
      <h1 className={`${titleStyle}`}>{title}</h1>
      <span className={`${subtitleStyle}`}>{subtitle}</span>
    </div>
  );
};
