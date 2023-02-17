import React, { useState } from "react";
import { CardStandard } from "../components/Card/CardStandard";
import data from "../mocks/cardata.json";
import { FaList } from "react-icons/fa";
import { BsFillGrid3X3GapFill, BsGridFill } from "react-icons/bs";
import { LayoutButton } from "../components/Buttons/LayoutButton";
import { CardHorizontal } from "../components/Card/CardHorizontal";
import { CardMini } from "../components/Card/CardMini";

export const CarsList = () => {
  const [layout, setLayout] = useState("grid");

  return (
    <div className="container my-20" data-testid="cars-container">
      <div className="flex gap-5 justify-center mb-20" id="buttonsLayout">
        <LayoutButton onClick={() => setLayout("grid")}>
          <BsGridFill />
        </LayoutButton>
        <LayoutButton onClick={() => setLayout("list")}>
          <FaList />
        </LayoutButton>
        <LayoutButton onClick={() => setLayout("mini")}>
          <BsFillGrid3X3GapFill />
        </LayoutButton>
      </div>

      {layout === "grid" && (
        <div className="flex gap-5 justify-center flex-row items-center" data-testid="cars-list">
          {data.data?.map((e) => {
            return <CardStandard data={e} key={e.id} />;
          })}
        </div>
      )}
       {layout === "list" && (
        <div className="flex gap-5 justify-center flex-col items-center" data-testid="cars-list"> 
          {data.data?.map((e) => {
            return <CardHorizontal data={e} key={e.id} />;
          })}
        </div>
      )}
       {layout === "mini" && (
        <div className="flex gap-5 justify-center flex-row items-center flex-wrap" data-testid="cars-list">
          {data.data?.map((e) => {
            return <CardMini data={e} key={e.id} />;
          })}
        </div>
      )}
    </div>
  );
};

