import React from "react";
import HotelCardItem from "./HotelCardItem";
import HotelsList from "../../data/globalHotelInfo";

const HotelListGlobal = () => {
  return (
    <ul className="max-w-6xl mx-auto grid grid-cols-3 mt-10 gap-x-3 gap-y-4">
      {HotelsList.map((hotel) => (
        <HotelCardItem image={hotel.image} title={hotel.title} key={hotel.id} />
      ))}
    </ul>
  );
};

export default HotelListGlobal;
