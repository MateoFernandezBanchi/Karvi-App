import React, { useState } from "react";
import { CarouselCars } from "../Carousel";
import { Badge } from "../Badge";
import { ButtonPrimary } from "../Buttons/ButtonPrimary";
import { FavoriteButton } from "../Buttons/FavoriteButton";
import { CgCalculator } from  "react-icons/cg";
import { SlLocationPin } from "react-icons/sl";

export const CardStandard = (data) => {

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
      <div className="flex-col flex lg:w-1/5  lg:flex-col md:flex-row w-64 md:w-4/5 bg-white p-2 rounded-lg relative drop-shadow-xl pb-20"
      >
        <CarouselCars data={carsData} />
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
          <div className="my-4 flex justify-center absolute bottom-0 w-4/5">
            <ButtonPrimary content={"Simular parcelas"}>
              <div className="flex gap-5 h-8 justify-center items-center">
                <CgCalculator className="text-2xl"/>
                Simular parcelas
              </div>
            </ButtonPrimary>
          </div>
        </div>
        <FavoriteButton favorite={favorite} setFavorite={setFavorite} />
      </div>
    </>
  );
};
