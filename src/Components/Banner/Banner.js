import React from "react";
import "./Banner.css";
import Data from "../Data/Test_Data.json";

export default function Banner() {
  let data = Data;
  //   console.log(data.Comercio.bannerComercio);
  return (
    <div className="banner">
      <img
        src={data.Comercio.bannerComercio}
        alt="Imagen Banner Re Tiendas"
        className="imgBanner"
      />
    </div>
  );
}
