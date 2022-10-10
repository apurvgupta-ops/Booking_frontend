import React from "react";
import hotel from "../Image/hotels.jpg";
const PropertyType = () => {
  return (
    <div className="mt-10">
      <div>
        <h2 className="text-3xl font-bold">Browse my property type</h2>
      </div>
      <div className="relative flex gap-2 mt-6">
        <div className="">
          <img src={hotel} alt="" className="rounded-lg w-full h-60" />
          <div>
            <h3 className="text-black text-2xl font-bold">Hotels</h3>
            <p>100 Hotels</p>
          </div>
        </div>
        <div className="">
          <img src={hotel} alt="" className=" rounded-lg w-full h-60" />
          <div>
            <h3 className="text-black  text-2xl font-bold">Apartments</h3>
            <p>100 Apartments</p>
          </div>
        </div>
        <div className="">
          <img src={hotel} alt="" className=" rounded-lg w-full h-60" />
          <div>
            <h3 className="text-black text-2xl font-bold">Resorts</h3>
            <p>100 Resorts</p>
          </div>
        </div>
        <div className="">
          <img src={hotel} alt="" className=" rounded-lg w-full h-60" />
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
