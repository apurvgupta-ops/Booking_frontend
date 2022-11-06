import React from "react";
import useFetch from "../Hooks/useFetch";
import image from "../Image/globle.jpg";
const Travellers = () => {
  const { data, error, loading } = useFetch("/hotels?featured=true&limit=4");
  console.log(data);
  return (
    <div className="mt-10">
      {loading ? (
        "Loading... "
      ) : (
        <>
          <div className="text-3xl font-bold pb-4">
            <h1>Connect with other travellers</h1>
          </div>
          <div className="flex gap-2 ">
            {data.map((item) => (
              <>
                <div className="w-1/3">
                  <img
                    alt=""
                    src={image}
                    className="w-full h-full overflow-hidden rounded-md"
                  />
                  <div>
                    <p className="font-bold text-xl ">{item?.name}</p>
                    <p>{item?.city}</p>
                    <p className="font-bold text-md ">
                      Starting from {item?.cheapestPrice}RS
                    </p>
                    {item.rating ? (
                      <p className="mt-1">
                        {item.ratingType}
                        <span className="bg-blue-800 rounded text-sm p-1 ml-1 text-white">
                          {item.rating}
                        </span>
                      </p>
                    ) : (
                      <p className="mt-1">Rating Unavailable</p>
                    )}
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Travellers;
