import React from "react";

import place1 from "../images/img1.webp";
import place2 from "../images/img2.webp";
import place3 from "../images/img3.webp";
import place4 from "../images/img4.webp";
import place5 from "../images/img5.jpg";
import place6 from "../images/img6.webp";
import place7 from "../images/img7.webp";
import place8 from "../images/img8.webp";
import place9 from "../images/img9.webp";
import place10 from "../images/img10.webp";
const Explore = ({ title }) => {
  const placesAPI = [
    { placeImg: place1, location: "lorem ipsum", distance: " hour dirve" },
    { placeImg: place2, location: "lorem ipsum", distance: " hour dirve" },
    { placeImg: place3, location: "lorem ipsum", distance: " hour drive" },
    { placeImg: place4, location: "lorem ipsum", distance: "our drive" },
    { placeImg: place5, location: "lorem ipsum", distance: " hour drive" },
    { placeImg: place6, location: "lorem ipsum", distance: " hour drive" },
    { placeImg: place7, location: "lorem ipsum Gali", distance: " hour drive" },
    { placeImg: place8, location: "lorem ipsum Gali", distance: " hour drive" },
    { placeImg: place9, location: "lorem ipsum", distance: " hour drive" },
    { placeImg: place10, location: "lorem ipsum", distance: " hour drive" },
  ];
  return (
    <>
      <div className="relative my-7 md:mt-3 md:ml-10">
        <div className="travigo-container">
          <div className="flex items-center justify-center text-center mb-11 md:mb-7">
            <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold filter drop-shadow-lg text-slate-900">
              {title}
            </h1>
          </div>
          <div className="grid items-center grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
            {placesAPI?.map((val, i) => (
              <div
                key={i}
                className="flex items-center gap-5 sm:gap-3 rounded-lg hover:bg-emerald-300 transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <div className="flex items-center">
                  <img
                    src={val.placeImg}
                    alt={val.location}
                    className="w-20 h-20 sm:w-16 sm:h-16 rounded-lg filter drop-shadow-lg"
                  />
                </div>
                <div className="flex items-start flex-col text-slate-900">
                  <h1 className="text-lg sm:text-sm font-bold">
                    {val.location}
                  </h1>
                  <p className="font-normal lg:text-sm text-base sm:text-xs">
                    {val.distance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
