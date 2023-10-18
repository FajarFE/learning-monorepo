import React from 'react';
import {
  HeadCard,
  FooterCard,
  HeadCardProps,
  FooterCardProps,
} from '@nx-monorepo/atom';

export interface CardProps {
  styleHead?: string;
  styleFooter?: string;
  propsHead?: HeadCardProps;
  propsFooter?: FooterCardProps;
  children?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  styleFooter,
  styleHead,
  propsFooter,
  propsHead,
  children,
  className,
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center relative ${className}`}
    >
      <div className={`${styleHead}`}>
        <HeadCard {...propsHead} />
      </div>
      <div className={`${styleFooter}`}>
        <FooterCard {...propsFooter}>{children}</FooterCard>
      </div>
    </div>
  );
};
