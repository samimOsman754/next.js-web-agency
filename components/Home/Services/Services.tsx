import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  { title: "Design and Develop", icon: "/images/s1.png" },
  { title: "Account Settings", icon: "/images/s2.png" },
  { title: "Notifications", icon: "/images/s3.png" },
  { title: "Customer Support", icon: "/images/s4.png" },
  { title: "Email Marketing", icon: "/images/s5.png" },
  { title: "Digital Agency", icon: "/images/s6.png" },
];

const Services = () => {
  return (
    <div className="py-20 bg-[#eff3f6] dark:bg-gray-900">
      <div>
        <h1 className="text-red-500 dark:text-red-300 font-medium text-center">
          Our Services
        </h1>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 mt-4 font-bold tracking-wider">
          Provided Features
        </h1>
      </div>
      {/* Service Cards */}
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <ServiceCard key={service.title} title={service.title} icon={service.icon} />
        ))}
      </div>
    </div>
  );
};

export default Services;
