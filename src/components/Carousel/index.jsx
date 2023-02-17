import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const CarouselCars = ({ data }) => {
  const getCarsData = () => {
    try {
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  const carsData = getCarsData();

  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      className="w-auto"
    >
      {carsData?.image.map((e) => {
        return (
          <div key={carsData?.id} className="h-44">
            <img
              className="w-5 rounded-lg"
              src={e}
              alt={carsData?.description}
            />
          </div>
        );
      })}
    </Carousel>
  );
};
