import React from "react";
import hotel from "../Image/globle.jpg";
const PropertyType = () => {
  return (
    <div className="mt-10">
      <div>
        <h2 className="text-3xl font-bold">Travel with style</h2>
        <p className="text-gray-500">
          Select an accommodation type to start browsing
        </p>
      </div>
      <div className="relative flex gap-2 mt-6">
        <div className="w-1/4">
          <img
            src={hotel}
            alt=""
            className="rounded-lg w-full h-60 overflow-hidden"
          />
          <div>
            <h3 className="text-black text-2xl font-bold">Hotels</h3>
            <p>100 Hotels</p>
          </div>
        </div>
        <div className="w-1/4">
          <img
            src={hotel}
            alt=""
            className=" rounded-lg w-full h-60 overflow-hidden"
          />
          <div>
            <h3 className="text-black  text-2xl font-bold">Apartments</h3>
            <p>100 Apartments</p>
          </div>
        </div>
        <div className="w-1/4">
          <img
            src={hotel}
            alt=""
            className=" rounded-lg w-full h-60  overflow-hidden"
          />
          <div>
            <h3 className="text-black text-2xl font-bold">Resorts</h3>
            <p>100 Resorts</p>
          </div>
        </div>
        <div className="w-1/4">
          <img
            src={hotel}
            alt=""
            className=" rounded-lg w-full h-60 overflow-hidden"
          />
          <div>
            <h3 className="text-black text-2xl font-bold">villas</h3>
            <p>100 villas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyType;
