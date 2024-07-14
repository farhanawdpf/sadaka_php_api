import React from "react";
import img1 from "/assets/images/sponsors/wikimedia.png";
import img2 from "/assets/images/sponsors/bus.png";
import img3 from "/assets/images/sponsors/wikimedia.png";
import img4 from "/assets/images/sponsors/one-world.png";
import img5 from "/assets/images/sponsors/wikiversity.png";
import img6 from "/assets/images/sponsors/united-nations.png";
import img7 from "/assets/images/sponsors/bus.png";
import img8 from "/assets/images/sponsors/wikimedia.png";
import img9 from "/assets/images/sponsors/united-nations.png";
import img10 from "/assets/images/sponsors/wikimedia.png";

export const Sponser = () => {
  const flexx={
    display:"flex",
  }
  return (
    <div>
      <div className="section-home our-sponsors">
      <h2 className="title-style-1">
            Our Sponsors <span className="title-under" />
          </h2>
        <div className="container" style={flexx}>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
          <img src={img9} alt="" />
          <img src={img10} alt="" />
        </div>
      </div>{" "}
    </div>
  );
};
