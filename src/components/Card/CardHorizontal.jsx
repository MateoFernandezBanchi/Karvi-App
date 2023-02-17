import React, { useState } from "react";
import { CarouselCars } from "../Carousel";
import { Badge } from "../Badge";
import { FavoriteButton } from "../Buttons/FavoriteButton";
import { SlLocationPin } from "react-icons/sl";

export const CardHorizontal = (data) => {

  const [favorite, setFavorite] = useState(false);
  const getCarsData =  () => {
    try {
      const dataCars = data.data;
      return dataCars;
    } catch (e) {
      console.log(e);
    }
  };
  const carsData = getCarsData();

  return (
    <>
      <div className="flex flex-row w-3/5 bg-white p-2 rounded-lg relative drop-shadow-xl pb-20 h-48"
      >
        <div className="w-1/3">
        <CarouselCars data={carsData}/>
        </div>
        <div className="ml-4">
          <div className="flex py-1 gap-2">
            <Badge text={carsData?.year} />
            <Badge text={carsData?.km} />
          </div>
          <div className="">
            <h3 className="font-bold py-1">{carsData?.name}</h3>
            <p>{carsData?.description}</p>
            <h4 className="text-lg text-orange-700 font-semibold">{carsData?.price}</h4>
            <h5 className="text-gray-500 flex items-center gap-2"> <SlLocationPin/> {carsData?.location}</h5>
          </div>
        </div>
        <FavoriteButton favorite={favorite} setFavorite={setFavorite} />
      </div>
    </>
  );
};
