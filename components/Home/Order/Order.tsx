import React from "react";

const Order = () => {
  return (
    <div className="py-20 bg-[#eff3f6] dark:bg-gray-900">
      <div>
        <h1 className="text-red-500 dark:text-red-300 font-semibold text-center">
          Booking
        </h1>
        <h1 className="text-center text-3xl md:text-4xl lg:text-gray-900 dark:text-gray-100 mt-4 font-bold tracking-wider">
          Book service online
        </h1>
      </div>
      <p className="text-center text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
        Book your service online and enjoy the convenience of scheduling
        appointments from the comfort of your home. Our user-friendly online
        booking system allows you to easily select your desired service, choose
        a convenient time slot, and confirm your appointment with just a few
        clicks. Say goodbye to long wait times and enjoy the ease of booking
        your service online today!
      </p>
      <div className="text-center mt-10">
        <button className="text-white rounded-full px-14 py-4 cursor-pointer bg-pink-600 hover:bg-pink-700 transition-all duration-200">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Order;
