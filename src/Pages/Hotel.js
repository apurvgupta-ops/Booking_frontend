import React from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import HotelDetail from "../Components/HotelDetail";
import Subscription from "../Components/Subscription";

const Hotel = () => {
  return (
    <>
      <div className="w-screen m-auto bg-[#003580]">
        <div className="max-w-[80%] m-auto ">
          <NavBar />
          <Header type="hotels" />
        </div>
      </div>
      <div className="flex flex-col max-w-[80%] m-auto ">
        <HotelDetail />
      </div>
      <div className="w-screen bg-[#003580]">
        <Subscription />
      </div>
    </>
  );
};

export default Hotel;
