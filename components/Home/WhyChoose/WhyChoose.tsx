import Image from "next/image";
import React from "react";
import { BiSupport } from "react-icons/bi";
import { FaHammer, FaRocket } from "react-icons/fa";

const WhyChoose = () => {
  return (
    <div className="py-20">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="0">
          <h1 className="text-red-500 dark:text-red-300 font-medium">
            Why Choose
          </h1>
          <h1 className="text-2xl md:text-4xl lg:text-5xl leading-8 md:leading-12 lg:leading-14 text-gray-900 dark:text-gray-100 mt-4 font-bold tracking-wider">
            Specialist in aviding clients on financial challenges
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-300 leading-7">
            Corporate headquarters is the part of a corporate structure that
            deals with important tasks such as strategic planning,
          </p>
          <div className="mt-8">
            {/* 1st list item */}
            <div className="flex items-center space-x-6 mb-10">
              <div className="flex items-center justify-center flex-col w-18 h-18 rounded-full bg-red-600 dark:bg-pink-500">
                <FaRocket className="text-white w-6 h-6" />
              </div>
              <div className="flex-1">
                <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Fast Working Process
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-300 leading-6 lg:w-[85%]">
                  Corporate headquarters is the part of a corporate structure
                  that deals with important
                </p>
              </div>
            </div>
            {/* 2nd list item */}
            <div className="flex items-center space-x-6 mb-10">
              <div className="flex items-center justify-center flex-col w-18 h-18 rounded-full bg-blue-600 dark:bg-indigo-400">
                <FaHammer className="text-white w-6 h-6" />
              </div>
              <div className="flex-1">
                <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Dedicated Team
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-300 leading-6 lg:w-[85%]">
                  Corporate headquarters is the part of a corporate structure
                  that deals with important
                </p>
              </div>
            </div>
            {/* 3rd list item */}
            <div className="flex items-center space-x-6 mb-10">
              <div className="flex items-center justify-center flex-col w-18 h-18 rounded-full bg-green-600 dark:bg-yellow-500">
                <BiSupport className="text-white w-6 h-6" />
              </div>
              <div className="flex-1">
                <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  24/7 Support
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-300 leading-6 lg:w-[85%]">
                  Corporate headquarters is the part of a corporate structure
                  that deals with important
                </p>
              </div>
            </div>
            {/* 4th list item */}
          </div>
        </div>
        {/* Image Content */}
        <div data-aos="fade-right" data-aos-achor-placement="top-center" data-aos-delay="100">
          <Image src={"/images/wc.png"} alt="img" width={1000} height={1000} />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
