import React from 'react';

export interface FooterCardProps {
  price?: string;
  children?: React.ReactNode;
  classname?: string;
  textStyle?: string;
  priceStyle?: string;
}

export const FooterCard: React.FC<FooterCardProps> = ({
  price,
  children,
  priceStyle,
  classname,
  textStyle,
}) => {
  return (
    <div
      className={`${classname} gap-5 flex-col flex justify-center items-center`}
    >
      <div className="flex justify-center items-center">
        <h1 className={`${priceStyle}`}>{price}</h1>
        <span className={`${textStyle}`}>per month</span>
      </div>
      {children}
    </div>
  );
};
