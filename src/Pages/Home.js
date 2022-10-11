import React from "react";
import Calender from "../Components/Calender";
import FeaturedHotels from "../Components/FeaturedHotels";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import PropertyType from "../Components/PropertyType";
import Subscription from "../Components/Subscription";
import Title from "../Components/Title";
import Travellers from "../Components/Travellers";
const Home = () => {
  return (
    <>
      <div className="w-screen m-auto bg-[#003580] relative">
        <div className="max-w-[80%] m-auto ">
          <NavBar />
          <Header />
          {/* <Title /> */}
          {/* <Calender /> */}
        </div>
      </div>
      <div className="max-w-[80%] mt-12 m-auto ">
        <FeaturedHotels />
        <PropertyType />
        <Travellers />
      </div>
      <div className="mt-10 w-screen bg-[#00224f]">
        <Subscription />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
