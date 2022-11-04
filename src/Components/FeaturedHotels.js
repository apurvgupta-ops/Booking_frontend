import React from "react";
import useFetch from "../Hooks/useFetch";
import img from "../Image/globle.jpg";
import Crousel from "./Crousel";
const FeaturedHotels = () => {
  const { data, loading, error } = useFetch(
    "/hotels/citycount?cities=Alwar,jaipur,Udaipur"
  );
  console.log(data);
  return (
    <>
      {loading ? (
        "Loading please wait"
      ) : (
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
              <div className=" absolute px-6 bottom-4 ">
                <h3 className="text-white text-3xl font-bold">Alwar</h3>
                {/* <p>{data[0]} Properties </p> */}
              </div>
            </div>
            <div className="w-1/3">
              <img src={img} alt="" className=" rounded-lg w-full h-80" />
              <div className=" absolute px-6 bottom-4 ">
                <h3 className="text-white text-3xl font-bold">Jaipur</h3>
                {/* <p>{data[1]} Properties </p> */}
              </div>
            </div>
            <div className="w-1/3 ">
              <img src={img} alt="" className=" rounded-lg w-full h-80 " />
              <div className=" absolute px-6 bottom-4 ">
                <h3 className="text-white text-3xl font-bold">Udaipur</h3>
                {/* <p>{data[2]} Properties </p> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedHotels;
