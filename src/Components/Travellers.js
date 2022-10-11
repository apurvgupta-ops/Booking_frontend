import React from "react";
import image from "../Image/globle.jpg";
const Travellers = () => {
  return (
    <div className="mt-10">
      <div className="text-3xl font-bold pb-4">
        <h1>Connect with other travellers</h1>
      </div>
      <div className="flex gap-2 ">
        <div className="w-1/3">
          <img
            alt=""
            src={image}
            className="w-full h-full overflow-hidden rounded-md"
          />
        </div>
        <div className="w-1/3">
          <img
            alt=""
            src={image}
            className="w-full h-full overflow-hidden rounded-md"
          />
        </div>
        <div className="w-1/3">
          <img
            alt=""
            src={image}
            className="w-full h-full overflow-hidden rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Travellers;
