import React, { useContext, useState } from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { FaWindowClose } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { SearchContext } from "../Context/SearchContextProvider";
import useFetch from "../Hooks/useFetch";
import pic1 from "../Image/pic 1.jpg";
import pic2 from "../Image/pic 2.jpg";
import pic3 from "../Image/pic 3.jpg";
import pic4 from "../Image/pic 4.jpg";
import pic5 from "../Image/pic 5.jpg";
import pic6 from "../Image/pic 6.jpg";

import Subscription from "./Subscription";
const images = [
  { image: pic1 },
  { image: pic2 },
  { image: pic3 },
  { image: pic4 },
  { image: pic5 },
  { image: pic6 },
];

const HotelDetail = () => {
  const { id } = useParams();
  // console.log(id);
  const { data, error, loading } = useFetch(`/hotels/find/${id}`);
  // console.log(data);
  const { city, dates, options } = useContext(SearchContext);
  // console.log(dates);
  const [sliderNo, setSliderNo] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);
  const handleOpen = (i) => {
    setSliderNo(i);
    setOpenSlider(true);
  };

  const handleMove = (direction) => {
    let newSlideNo;
    if (direction === "l") {
      newSlideNo = sliderNo === 0 ? 5 : sliderNo - 1;
    } else {
      newSlideNo = sliderNo === 5 ? 0 : sliderNo + 1;
    }

    setSliderNo(newSlideNo);
  };
  return (
    <>
      <div className="w-full mt-6 ">
        <div className="flex justify-between w-full relative">
          <h1 className="font-bold text-3xl ">{data?.name}</h1>
          <button className="bg-[#3287fd] px-2 rounded text-white">
            Reserve or Book Now!
          </button>
        </div>
        <div>
          <small>{data?.city}</small>
          <p className="text-blue-600 font-bold">
            Excellent location - {data?.distance} from center
          </p>
          <p className="text-red-500 font-bold">
            Book a stay over 5000 at this property and get a free airport texi
          </p>
        </div>
        {openSlider && (
          <div className="w-[80%] bg-gray-50 bg-opacity-70 h-[80%] z-50 flex items-center absolute">
            <FaWindowClose
              size={30}
              className="absolute top-[20px] right-[20px] cursor-pointer"
              onClick={() => setOpenSlider(false)}
            />
            <BsArrowLeftSquareFill
              size={30}
              className="m-5 cursor-pointer"
              onClick={() => handleMove("l")}
            />
            <div className="w-full h-full flex items-center justify-center">
              <img src={images[sliderNo].image} alt="" className="w-[60%] " />
            </div>
            <BsArrowRightSquareFill
              size={30}
              className="m-5 cursor-pointer"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="flex gap-2 flex-wrap w-full mt-4 mb-6">
          {images.map((image, i) => (
            <img
              src={image.image}
              alt=""
              className="w-[399px] cursor-pointer"
              onClick={() => handleOpen(i)}
            />
          ))}
        </div>
        <div className="flex gap-6">
          <div className="mb-8 w-fit">
            Offering outdoor pool, Neemrana's - Hill Fort - Kesroli is located
            in Alwar. Free Wi-Fi access is available. Rooms here will provide
            you with air conditioning. Private bathrooms also come with a
            shower. Some rooms have a garden view. Extras include a desk. At
            Neemrana's - Hill Fort - Kesroli you will find a 24-hour front desk,
            a garden and barbeque facilities. Other facilities offered include
            meeting facilities, a games room and a tour desk. The property is
            located 70 km from Sarska Tiger Sanctuary and 29 km from Siliserh
            Lake. Bhangarh Fort is a 100 km away where as Bharatpur Bird
            Sanctuary is 112 km away. Indira Gandhi International Airport is 140
            km away. Alwar Railway Station is 12 km away. Couples particularly
            like the location — they rated it 8.0 for a two-person trip.
          </div>
          <div className="bg-blue-100 p-4 rounded flex flex-col gap-4 justify-center">
            <h4 className="font-bold">Perfect for a 9-night stay!</h4>
            <p>located near to railway station excellent location 9.8 rating</p>
            <h1 className="font-bold text-xl">
              1000 Rs <span>(9 nights)</span>
            </h1>
            <button className="bg-[#3287fd] p-2 rounded text-white">
              Reserve or Book Now!
            </button>
          </div>
        </div>
      </div>
      {/* <div className="bg-[#003580] w-screen">
        <Subscription />
      </div> */}
    </>
  );
};

export default HotelDetail;
