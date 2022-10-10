import React from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";

const Hotels = () => {
  return (
    <div className="w-screen m-auto bg-[#003580]">
      <div className="max-w-[80%] m-auto ">
        <NavBar />
        <Header type="hotels" />
      </div>
    </div>
  );
};

export default Hotels;
