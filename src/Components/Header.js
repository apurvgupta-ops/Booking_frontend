import React from "react";
import { FaBed } from "react-icons/fa";
import { TbPlaneInflight } from "react-icons/tb";
import { GiWitchFlight } from "react-icons/gi";
import { AiOutlineCar } from "react-icons/ai";
import { MdAirportShuttle, MdOutlineAttractions } from "react-icons/md";

const icons = [
  {
    icon: <FaBed className="text-white" size={30} />,
    title: "Stays",
  },
  {
    icon: <TbPlaneInflight className="text-white" size={30} />,
    title: "Flight",
  },
  {
    icon: <GiWitchFlight className="text-white" size={30} />,
    title: "Flight + Hotels",
  },
  {
    icon: <AiOutlineCar className="text-white" size={30} />,
    title: "Car Rentel",
  },
  {
    icon: <MdOutlineAttractions className="text-white" size={30} />,
    title: "Attraction",
  },
  {
    icon: <MdAirportShuttle className="text-white" size={30} />,
    title: "Airport Texi",
  },
];

const Header = () => {
  return (
    <div className="mt-8 flex ">
      <div className="flex gap-10 ">
        {icons.map((icon, index) => (
          <button
            className="flex gap-2 rounded-full p-2 hover:bg-[#0071c2] active:bg-[#144f7a] focus:outline-none focus:ring-1 focus:ring-white"
            key={index}
          >
            {icon.icon}
            <p className="text-lg text-white">{icon.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
