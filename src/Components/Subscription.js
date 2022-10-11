import React from "react";

const Subscription = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-2xl pt-4">Save time, Save money!</h1>
        <p className="text-gray-400 text-xl ">
          Sign up and we'll send the best deals to you
        </p>
        <div className="pt-4 flex gap-2">
          <input
            placeholder="Your email"
            type="text"
            className="p-2 px-8 rounded-md "
          />
          <button className="bg-[#0071c2] text-white rounded-md px-2">
            Subscribe
          </button>
        </div>
        <div className="flex gap-2 text-white pt-2 pb-10">
          <input type="radio" /> Send me a link to get the FREE Booking app!
        </div>
      </div>
    </div>
  );
};

export default Subscription;
