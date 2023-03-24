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
import { Box } from "@mui/material";
import Map from "./Map";
const MapShow = ({ title, dst }) => {
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
      <div
        style={{ height: "100vh" }}
        className="relative mt-7 md:mt-6 bg-gradient-to-t from-emerald-200 to-white"
      >
        <div className="travigo-container" style={{ paddingBottom: "50px" }}>
          <div className="flex items-center justify-center text-center mb-11 md:mb-7">
            <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold filter drop-shadow-lg text-slate-900">
              {title}
            </h1>
          </div>
          <div className="d-flex items-center justify-center">
            {
              <Box>
                <Map dst={dst} />
              </Box>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default MapShow;
