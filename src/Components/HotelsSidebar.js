import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { FaCalendar } from "react-icons/fa";
const HotelsSidebar = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const location = useLocation();
  console.log(location);
  return (
    <div className="mt-10 w-[28%]">
      <div className="bg-yellow-400 rounded-md">
        <h1 className="p-2 font-bold text-2xl">Search</h1>
        <div>
          <small className="px-2">Destination / Property Name</small>
          <div className="flex gap-1 pt-1 justify-center items-center">
            <BiSearchAlt className="" size={20} />
            <input
              type="text"
              placeholder={location.state.destination}
              className="p-1 rounded-md px-1 m-2"
            />
          </div>
        </div>
        <div>
          <small className="px-2">Check in/Check Out</small>
          <div className="flex gap-2 pt-1 justify-center items-center ">
            <FaCalendar size={20} className="" />
            <div className="flex flex-col justify-center items-center">
              <span
                onClick={() => {
                  setOpenDate(!openDate);
                }}
                className="px-3 py-1 rounded-md text-sm bg-white"
              >
                {`${format(date[0].startDate, "dd/MM/yyyy")} To ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </span>
              <div className="">
                {openDate && (
                  <DateRange
                    className=""
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <small className="px-2">Options </small>
        <div className="px-2">
          <div>
            <span>
              Min Price <small>per night : </small>
            </span>
            <input
              type="number"
              className="rounded-md px-2 mb-2 outline-none"
            />
          </div>
          <div>
            <span>
              Max Price <small>per night :</small>
            </span>
            <input
              type="number"
              className=" mb-2 rounded-md px-2 outline-none"
            />
          </div>
          <div className="">
            <span className="mr-2">Adults</span>
            <input
              type="number"
              min={1}
              className="rounded-md mb-2 px-2 outline-none"
              placeholder={location.state.options.adult}
            />
          </div>
          <div>
            <span className="mr-2">Children</span>
            <input
              type="number"
              placeholder={location.state.options.children}
              min={0}
              className="rounded-md mb-2 px-2 outline-none"
            />
          </div>
          <div>
            <span className="mr-2 ">Rooms</span>
            <input
              type="number"
              placeholder={location.state.options.room}
              min={1}
              className="rounded-md mb-6 px-2 outline-none"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-[#0071ca] text-xl mb-4 text-white p-2 px-8 rounded-md">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelsSidebar;
