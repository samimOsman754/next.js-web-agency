import React from "react";

type Props = {
  title: string;
  price: string;
};

const PriceCard = ({ title, price }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-4 text-center tracking-wider">
        {title}
      </h1>
      <p className="mt-4 text-gray-500 dark:text-gray-300 mb-6 text-center">
        Monthly package
      </p>
      <h1 className="font-bold text-center text-gray-900 dark:text-gray-100">
        <span className="text-5xl">${price}</span>month
      </h1>
      <div className="mt-8 space-y-4 text-sm text-gray-500 tracking-wider text-center dark:text-gray-100">
        <p>Unlimited updates & projects</p>
        <p>Custom Permissions</p>
        <p>Custom instructor</p>
        <p>Dedicated support</p>
      </div>
      <div className="mt-6 mb-6 text-center">
        <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
