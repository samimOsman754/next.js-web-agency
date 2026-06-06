import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="py-24 dark:bg-gray-950">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* Image Content */}
        <div>
          <Image src={"/images/a1.png"} alt="image" width={500} height={500} />
        </div>
        {/* Text Content */}
        <div>
          <h1 className="text-purple-800 dark:text-purple-600 font-medium">
            About Us
          </h1>
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mt-2">
            We Are The Leader in Web Design
          </h1>
          {/* Description */}
          <p className="text-gray-500 dark:text-gray-200 text-base leading-8 mt-8">
            A powerful web design is the one where the user is encouraged to
            stay on the site and not bounce to some other simple tips that will
            improve the bounce rate tremendously
          </p>
          <p className="text-gray-500 dark:text-gray-200 text-base leading-8 mt-4">
            A powerful web design is the one where the user is encouraged to
            stay on the site and not bounce to some other simple tips that will
            improve the bounce rate tremendously
          </p>
          {/* Stats */}
          <div className="mt-10">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-pink-700">
                  53K
                </h1>
                <p className="text-center text-xs sm:text-sm md:text-base font-medium text-gray-500">
                  Layout Done
                </p>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-pink-700">
                  10K
                </h1>
                <p className="text-center text-xs sm:text-sm md:text-base font-medium text-gray-500">
                  Project Done
                </p>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-pink-700">
                  120K
                </h1>
                <p className="text-center text-xs sm:text-sm md:text-base font-medium text-gray-500">
                  Get Awards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
