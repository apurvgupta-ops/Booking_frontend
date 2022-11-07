import axios from "axios";
import React, { useContext, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../Context/SearchContextProvider";
import useFetch from "../Hooks/useFetch";

const RoomsDetails = ({ setOpenModel, id }) => {
  const { data, error, loading } = useFetch(`/hotels/room/${id}`);
  const { dates } = useContext(SearchContext);
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    const dates = [];
    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };

  const allDates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelected(
      checked ? [...selected, value] : selected.filter((item) => item != value)
    );
  };

  const handleClick = async () => {
    try {
      await Promise.all(
        selected.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: allDates,
          });

          return res.data;
        })
      );
      setOpenModel(false);
      navigate("/");
    } catch (error) {}
  };
  return (
    <div className="top-[100%] left-[36.8%] flex justify-center items-center absolute">
      <div className="bg-blue-100 p-4 rounded  ">
        <h1 className="text-xl font-bold flex justify-between ">
          Select your rooms:
          <FaWindowClose
            onClick={() => setOpenModel(false)}
            className="cursor-pointer"
          />
        </h1>
        {data.map((item) => (
          <div className="mt-4 " key={item._id}>
            <h1 className="text-md font-bold">{item?.title}</h1>
            <p>
              {item?.desc}
              {item?.price}
              {item.roomNumbers.map((rn) => (
                <span className="pl-20 ">
                  {rn.number}{" "}
                  <input
                    type="checkbox"
                    value={rn._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(rn)}
                  />
                </span>
              ))}
            </p>
          </div>
        ))}

        <button
          className="bg-blue-500 px-3 py-1 rounded-md text-white mt-8 w-full mx-auto"
          onClick={handleClick}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomsDetails;
