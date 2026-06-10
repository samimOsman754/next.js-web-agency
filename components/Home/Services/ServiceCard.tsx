"use client";
import Tilt from "react-parallax-tilt";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  icon: string;
  title: string;
};

const ServiceCard = ({ icon, title }: Props) => {
  return (
    <Tilt className="bg-white dark:bg-gray-800 rounded-lg p-4">
      <div className="w-20 h-20 text-white bg-blue-100 rounded-full mx-auto mt-5 shadow-md flex flex-col items-center justify-center">
        <Image src={icon} alt={icon} width={40} height={40} />
      </div>
      <h1 className="text-center mt-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
        {title}
      </h1>
      <p className="text-center text-sm mt-2 leading-6 text-gray-400 dark:text-gray-300 p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
      </p>
      <div className="text-center mx-auto justify-center flex items-center space-x-1 mb-4 text-gray-800 dark:text-gray-100 mt-4 font-semibold cursor-pointer hover:text-red-400 transition-all duration-200 ">
        <span>Learn More</span>
        <FaArrowRight />
      </div>
    </Tilt>
  );
};

export default ServiceCard;
