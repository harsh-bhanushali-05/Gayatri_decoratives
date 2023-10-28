
import React, { useState } from 'react';
import 'animate.css';
import NewArrivalsHome from "./NewArrivalsHome";
import "./banner.css";
import img from "./Screenshot 2023-07-26 at 6.04.37 PM.png";
import Category from "./Category";

function Banner() {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleTitleClick = () => {
    setIsAnimated(!isAnimated);
  };

  return (
    <div>
      <img
        className={`cover-image `}
        src={img}
        alt="Screenshot-2023-07-26-at-6-04-37-PM"
        border="0"
      />
      <Category />
      <center>
        <h1 onMouseEnter={handleTitleClick} className={`banner-title ${isAnimated ? 'animate__animated animate__zoomInLeft' : ''}`}>
          New Arrivals!!
        </h1>
      </center>
     <center><NewArrivalsHome /></center> 
    </div>
  );
}

export default Banner;
