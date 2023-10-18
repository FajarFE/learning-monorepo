import { Button } from '@nx-monorepo/atom';
import React from 'react';

interface NavbarProps {
  title?: string;
  titleStyle?: string;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  title,
  className,
  titleStyle,
}) => {
  return (
    <div
      className={`${className} flex justify-between items-center py-2 container mx-auto`}
    >
      <div className={`${titleStyle}`}>{title}</div>
      <div className="flex gap-5">
        <Button
          className="border-2 border-black px-4 py-2 rounded-sm text-black"
          text="LOG IN"
        />
        <Button
          className="bg-black px-4 py-2 text-white rounded-sm"
          text="START FREE TRIAL"
        />
      </div>
    </div>
  );
};
