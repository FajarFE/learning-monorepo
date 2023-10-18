import React from 'react';
import { SubscibeItem } from '@nx-monorepo/organisms';
import { Button, HeadCard } from '@nx-monorepo/atom';
import { Navbar } from '@nx-monorepo/molecules';

export const LandingPageModules = () => {
  const data = [
    {
      id: 1,
      title: 'Basic',
      subtitle:
        'Add a summary of the plan,its key features, its main benefit,and its deal customer.',
      price: '$9.99',
    },
    {
      id: 2,
      title: 'Premium',
      subtitle:
        'Add a summary of the plan,its key features, its main benefit,and its deal customer.',
      price: '$19.99',
    },
    {
      id: 3,
      title: 'Ultimate',
      subtitle:
        'Add a summary of the plan,its key features, its main benefit,and its deal customer.',
      price: '$39.99',
    },
  ];
  return (
    <div className="w-screen">
      <div className="container mx-auto border-gray-200">
        <Navbar title="Logo" className="border-b-2 px-20" />
      </div>
      <div className="py-[100px] px-[400px] border-b-2">
        <HeadCard
          titleStyle="text-[55px] font-semibold text-center text-center"
          subtitleStyle="text-center text-gray-500 px-20 text-[20px]"
          title="Choose a Plan to Grow Your Bussines"
          subtitle="Supporting statement for you headline that extends your value proposition and propmt users to select one of your plans."
        />
      </div>
      <div className="w-full flex justify-center items-center my-20">
        <Button
          className="px-4 py-2 bg-black text-white rounded-l-md"
          text="MONTHLY"
        />
        <Button
          className="border-2 border-black text-black px-4 py-[6.4px] rounded-r-md"
          text="ANNUALY"
        />
      </div>
      <div className="flex justify-center mb-20 items-center">
        <SubscibeItem
          className="flex gap-8"
          styleHead="pt-10 pb-32 px-14"
          styleFooter="px-14 py-8 w-full border-t-2 border-gray-200"
          cardStyle="border-2 border-gray-200 rounded-md w-[300px]"
          data={data}
        />
      </div>
    </div>
  );
};
