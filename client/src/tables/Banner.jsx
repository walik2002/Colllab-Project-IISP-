import React from "react";
import "../CSS/Banner.css";
import BannerPP from "../picture/BannerPP.png";


function Banner() {
  return (
    <div className="banner-wrapper">
      <div className="banner">
        <img src={BannerPP} alt="banner-img" />
        <div className="banner-text">
        </div>
      </div>
    </div>
  );
}

export default Banner;
