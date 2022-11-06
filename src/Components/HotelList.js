import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import hotelImg from "../Image/las-vegas-1846684_1920.jpg";
const HotelList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const [destination, setDestination] = useState(location.state.destination);
  // const [date, setDate] = useState(location.state.date);
  // const [options, setOptions] = useState(location.state.options);
  const { data, error, loading } = useFetch(`/hotels?city=${destination}`);
  // console.log(data);

  const handleClick = (id) => {
    navigate(`/hotel/${id}`);
  };
  return (
    <div className="w-full mt-6">
      {data.map((item) => (
        <>
          <div className="border-2 border-gray-400 rounded-lg mb-4">
            <div className="flex p-4 gap-4">
              <img src={hotelImg} alt="" className="w-64 rounded-md" />
              <div className="flex flex-col flex-1 ">
                <h1 className="text-2xl">{item?.name}</h1>
                <span className="pb-5">
                  <a
                    className="text-blue-700"
                    href="https://www.booking.com/hotel/in/neemrana-s-hill-fort-kesroli.en-gb.html?label=gen173nr-1FCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AvHFipoGwAIB0gIkZjRiM2EwMmYtMmNiYi00NzI4LWE2NGMtZjdkMDc4NTdmYTYx2AIF4AIB&sid=39e7adf43aa6fc0647c2462a4d1fddee&aid=304142&ucfs=1&arphpl=1&checkin=2022-10-13&checkout=2022-10-14&dest_id=783507&dest_type=hotel&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=b23a4eb495530196&srepoch=1665573098&all_sr_blocks=78350702_285544072_0_41_0&highlighted_blocks=78350702_285544072_0_41_0&matching_block_id=78350702_285544072_0_41_0&sr_pri_blocks=78350702_285544072_0_41_0__759900&from=searchresults&map=1"
                  >
                    Show on map
                  </a>
                  . {item?.distance} Km from center
                </span>
                <div className="flex flex-col px-4 border-l-2">
                  <span className="text-black font-bold">Heritage Romance</span>
                  <span className="pb-2">2 single beds</span>
                  <span className="text-green-600 font-bold text-sm">
                    Breakfast included
                  </span>
                  <span className="text-red-600 font-bold text-sm">
                    {" "}
                    Only 5 rooms left at this price on our site
                  </span>
                </div>
              </div>
              <div className=" flex flex-col text-right justify-between">
                {item.rating ? (
                  <div className="flex gap-2 justify-end">
                    <span className="font-bold">Good</span>
                    <span className="bg-blue-700 p-1 text-white rounded-t-md rounded-r-md">
                      7.9
                    </span>
                  </div>
                ) : (
                  <p>Rating unavailable</p>
                )}

                <div className="flex flex-col">
                  <span>₹1023</span>
                  <span>+₹ 1,368 taxes and charges</span>
                  <button
                    className="bg-[#0071ca] p-1 rounded text-white cursor-pointer"
                    onClick={() => handleClick(item?._id)}
                  >
                    See Availability
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default HotelList;
