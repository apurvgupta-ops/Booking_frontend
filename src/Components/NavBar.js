import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center pt-4">
      <div className="text-white text-2xl font-bold ">Booking</div>
      <div className="">
        <button className=" p-1 mr-4 bg-white text-[#003580]">Register</button>
        <button className=" p-1  bg-white text-[#003580]">Signin</button>
      </div>
    </div>
  );
};

export default NavBar;
