import React from "react";
import Calender from "../Components/Calender";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Title from "../Components/Title";
const Home = () => {
  return (
    <div className="w-screen m-auto bg-[#003580] relative">
      <div className="max-w-[80%] m-auto ">
        <NavBar />
        <Header />
        <Title />
        <Calender />
      </div>
    </div>
  );
};

export default Home;
