import React from "react";
import img from "../Image/globle.jpg";
import Crousel from "./Crousel";
const FeaturedHotels = () => {
  return (
    <div className="">
      <div>
        <h2 className="text-3xl font-bold">Explore India</h2>
        <p className="text-gray-500">
          These popular destinations have a lot to offer
        </p>
      </div>

      <div>
        <Crousel />
      </div>

      <div className="relative flex gap-2 mt-6 overflow-hidden">
        <div className="w-1/3 ">
          <img src={img} alt="" className="rounded-lg w-full h-80" />
          <div>
            <h3 className="text-white absolute px-6 bottom-10 text-3xl font-bold">
              Goa
            </h3>
          </div>
        </div>
        <div className="w-1/3">
          <img src={img} alt="" className=" rounded-lg w-full h-80" />
          <div>
            <h3 className="text-white absolute px-6 bottom-10 text-3xl font-bold">
              Goa
            </h3>
          </div>
        </div>
        <div className="w-1/3 ">
          <img src={img} alt="" className=" rounded-lg w-full h-80 " />
          <div>
            <h3 className="text-white absolute px-6 bottom-10 text-3xl font-bold">
              Goa
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHotels;
