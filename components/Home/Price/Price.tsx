import React from "react";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div className="py-20 bg-[#eff3f6] dark:bg-gray-900">
      <div>
        <h1 className="text-red-500 dark:text-red-300 font-medium text-center">
          Pricing Table
        </h1>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 mt-4 font-bold tracking-wider">
          Live Chat 24/7 Support
        </h1>
      </div>
      <div className="w-[80%] mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center">
        {/* Pricing card */}
        <div data-aos="fade-right" data-aos-achor-placement="top-center" data-aos-delay="0">
          <PriceCard price="20" title="Optimized & SEO" />
        </div>
        <div data-aos="fade-right" data-aos-achor-placement="top-center" data-aos-delay="100">
          <PriceCard price="50" title="Designing" />
        </div>
        <div data-aos="fade-right" data-aos-achor-placement="top-center" data-aos-delay="200">
          <PriceCard price="60" title="Development" />
        </div>
        <div data-aos="fade-right" data-aos-achor-placement="top-center" data-aos-delay="300">
          <PriceCard price="80" title="Supporting" />
        </div>
      </div>
    </div>
  );
};

export default Price;
