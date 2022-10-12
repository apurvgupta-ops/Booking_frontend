import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { FaBed, FaCalendar, FaPersonBooth } from "react-icons/fa";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Calender = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className="flex absolute w-[80%] top-[275px] mt-10 border-4 border-yellow-500 rounded-md">
      {/* INPUT */}
      <div className="flex bg-white w-[30%] items-center p-1 border-r-4 border-yellow-500">
        <FaBed size={30} />
        <input
          placeholder="Where are you going?"
          className="p-2 rounded-md w-full"
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      {/* CALENDER */}
      <div className="flex bg-white w-[30%] items-center p-1 relative border-r-4 border-yellow-500 z-10">
        <FaCalendar size={30} />
        <span
          onClick={() => {
            setOpenDate(!openDate);
            setOpenOptions(false);
          }}
          className="w-full tracking-wide flex justify-evenly"
        >{`${format(date[0].startDate, "dd/MM/yyyy")} To ${format(
          date[0].endDate,
          "dd/MM/yyyy"
        )}`}</span>
        {openDate && (
          <DateRange
            className="absolute top-12 w-full "
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
          />
        )}
      </div>
      {/* PERSONS */}
      <div className="flex bg-white w-[30%] items-center p-1 border-r-4 border-yellow-500 relative z-10">
        <MdOutlinePersonAddAlt1 size={30} />
        <div className="flex m-auto px-2">
          <span
            onClick={() => {
              setOpenOptions(!openOptions);
              setOpenDate(false);
            }}
            className="mr-4"
          >{`${options.adult} Adults . ${options.children} Children . ${options.room} Rooms`}</span>
        </div>
        {openOptions && (
          <div className="absolute top-12 w-full p-4 bg-gray-100 rounded-sm">
            <div className="flex justify-between mb-2">
              Adults
              <div className="flex items-center text-2xl gap-2">
                <button
                  onClick={() => handleOptions("adult", "d")}
                  disabled={options.adult <= 1}
                  className={
                    options.adult <= 1
                      ? "border-2 border-gray-400 px-2"
                      : "border-2 border-blue-400 px-2"
                  }
                >
                  -
                </button>
                <p>{options.adult}</p>
                <button
                  onClick={() => handleOptions("adult", "i")}
                  className="border-2 border-blue-400 px-1 "
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between mb-2">
              Children
              <div className="flex items-center text-2xl gap-2">
                <button
                  onClick={() => handleOptions("children", "d")}
                  disabled={options.children <= 0}
                  className={
                    options.children <= 1
                      ? "border-2 border-gray-400 px-2"
                      : "border-2 border-blue-400 px-2"
                  }
                >
                  -
                </button>
                <p>{options.children}</p>
                <button
                  onClick={() => handleOptions("children", "i")}
                  className="border-2 border-blue-400 px-1 "
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              Rooms
              <div className="flex items-center text-2xl gap-2">
                <button
                  onClick={() => handleOptions("room", "d")}
                  disabled={options.room <= 1}
                  className={
                    options.room <= 1
                      ? "border-2 border-gray-400 px-2"
                      : "border-2 border-blue-400 px-2"
                  }
                >
                  -
                </button>
                <p>{options.room}</p>
                <button
                  onClick={() => handleOptions("room", "i")}
                  className="border-2 border-blue-400 px-1 "
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="bg-[#3287fd] w-[10%] text-white text-2xl flex justify-center ">
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Calender;
