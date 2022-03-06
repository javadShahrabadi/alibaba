import React from "react";
import HotelCardItem from "./HotelCardItem";
import HotelsList from "../../data/iranHotelInfo";

const HotelListIran = () => {
  return (
    <ul className="max-w-6xl mx-auto grid grid-cols-3 mt-14 gap-x-3 gap-y-4 mb-16">
      {HotelsList.map((hotel) => (
        <HotelCardItem image={hotel.image} title={hotel.title} key={hotel.id} />
      ))}
    </ul>
  );
};

export default HotelListIran;
