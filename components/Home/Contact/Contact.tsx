import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="py-20">
      <div>
        <h1 className="text-red-500 dark:text-red-300 font-medium text-center">
          Our Contact Information
        </h1>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 mt-4 font-bold tracking-wider">
          Join Our Workplace Around The World
        </h1>
      </div>
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
        <Image
          src={"/images/map.png"}
          alt="map"
          width={900}
          height={900}
          className="mx-auto mt-16"
          data-aos="zoom-in" data-aos-achor-placement="top-center" data-aos-delay="0"
        />
      </div>
      <div className="mt-16 px-16">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-gray-900 dark:text-gray-100 font-bold">
          Get In Touch
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <input type="email" placeholder="Your email" className="border-2 border-gray-300 px-4 outline-none py-3 rounded-full" />
            <input type="text" placeholder="Your name" className="border-2 border-gray-300 px-4 outline-none py-3 rounded-full" />
            <input type="text" placeholder="Website" className="border-2 border-gray-300 px-4 outline-none py-3 rounded-full" />
            
        </div>
        <textarea placeholder="Your message" className="border-2 border-gray-300 px-4 outline-none py-3 rounded-lg w-full mt-4" rows={5} />
        <button className="bg-red-500 text-white px-6 py-3 rounded-full mt-4 hover:bg-red-600 transition duration-300">Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
