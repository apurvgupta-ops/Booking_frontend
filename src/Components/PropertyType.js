import React from "react";
import useFetch from "../Hooks/useFetch";
import hotel from "../Image/globle.jpg";

const PropertyType = () => {
  const { data, loading, error } = useFetch("/hotels/hoteltype");
  console.log(data);
  return (
    <div className="mt-10">
      <div>
        <h2 className="text-3xl font-bold">Property Types</h2>
        <p className="text-gray-500">
          Select an accommodation type to start browsing
        </p>
      </div>
      <div className="relative flex gap-2 mt-6">
        {data.map((d, i) => (
          <div className="w-1/4" key={i}>
            <img
              src={hotel}
              alt=""
              className="rounded-lg w-full h-60 overflow-hidden"
            />
            <div>
              <h3 className="text-black text-2xl font-bold capitalize">
                {data[i]?.type}
              </h3>
              <p>
                {data[i]?.count} {data[i]?.type}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyType;
