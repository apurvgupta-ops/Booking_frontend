import React from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Title from "../Components/Title";
const Home = () => {
  return (
    <div className="w-screen m-auto bg-[#003580]">
      <div className="max-w-[80%] m-auto ">
        <NavBar />
        <Header />
        <Title />
      </div>
    </div>
  );
};

export default Home;
