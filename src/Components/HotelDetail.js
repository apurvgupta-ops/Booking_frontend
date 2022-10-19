import React from "react";
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

const HotelHotelDetail = () => {
  return (
    <>
      <div className="w-full mt-6">
        <div className="flex justify-between w-full">
          <h1 className="font-bold text-3xl ">Neemrana Hotel</h1>
          <button className="bg-[#3287fd] px-2 rounded text-white">
            Reserve or Book Now!
          </button>
        </div>
        <div>
          <small>kesroli</small>
          <p className="text-blue-600 font-bold">
            Excellent location - 1km from center
          </p>
          <p className="text-red-500 font-bold">
            Book a stay over 5000 at this property and get a free airport texi
          </p>
        </div>
        <div className="flex gap-2 flex-wrap w-full mt-4 mb-6">
          {images.map((image) => (
            <img src={image.image} alt="" className="w-[399px]" />
          ))}
        </div>
        <div className="mb-8">
          Offering outdoor pool, Neemrana's - Hill Fort - Kesroli is located in
          Alwar. Free Wi-Fi access is available. Rooms here will provide you
          with air conditioning. Private bathrooms also come with a shower. Some
          rooms have a garden view. Extras include a desk. At Neemrana's - Hill
          Fort - Kesroli you will find a 24-hour front desk, a garden and
          barbeque facilities. Other facilities offered include meeting
          facilities, a games room and a tour desk. The property is located 70
          km from Sarska Tiger Sanctuary and 29 km from Siliserh Lake. Bhangarh
          Fort is a 100 km away where as Bharatpur Bird Sanctuary is 112 km
          away. Indira Gandhi International Airport is 140 km away. Alwar
          Railway Station is 12 km away. Couples particularly like the location
          — they rated it 8.0 for a two-person trip.
        </div>
      </div>
      {/* <div className="bg-[#003580] w-screen">
        <Subscription />
      </div> */}
    </>
  );
};

export default HotelHotelDetail;
