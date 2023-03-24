import React from "react";
import { Link } from "react-router-dom";
import place1 from "../images/img1.webp";
import place3 from "../images/img3.webp";
import place4 from "../images/img4.webp";
import place5 from "../images/img5.jpg";
import place6 from "../images/img6.webp";
import place7 from "../images/img7.webp";
import place8 from "../images/img8.webp";
import place9 from "../images/img9.webp";
import place10 from "../images/img10.webp";

const base_url = "https://storage.googleapis.com/pdf-trip-plans/";

const Explore = ({ title }) => {
  const placesAPI = [
    {
      placeImg: place1,
      location: "Nepal",
      link: `${base_url}plans/trip-to- Kathmandu, Nepal-1677868635.3493497.pdf`,
    },
    {
      placeImg: place10,
      location: "Mount Abu",
      link: `${base_url}plans/trip-to-2 days trip in mount abu-1677753407.4277527.pdf`,
    },
    {
      placeImg: place3,
      location: "Bali",
      link: `${base_url}plans/trip-to-Bali Indonesia -1677857491.290219.pdf`,
    },
    {
      placeImg: place4,
      location: "Goa",
      link: `${base_url}plans/trip-to- goa-1677683052.7227485.pdf`,
    },
    {
      placeImg: place5,
      location: "Munnar",
      link: `${base_url}plans/trip-to-3day trip to munnar-1677766821.896906.pdf`,
    },
    {
      placeImg: place6,
      location: "Meghalaya",
      link: `${base_url}plans/trip-to- Meghalaya india -1677567018.3818476.pdf`,
    },
    {
      placeImg: place7,
      location: "Kerala",
      link: `${base_url}plans/trip-to- kerala, hampi-1677569147.1092768.pdf`,
    },
    {
      placeImg: place8,
      location: "Bangalore",
      link: `${base_url}plans/trip-to-1 day near Bangalore -1677861983.9344642.pdf`,
    },
    {
      placeImg: place9,
      location: "Chennai",
      link: `${base_url}plans/trip-to-1 day trip in chennai-1677963366.6425345.pdf`,
    },
    {
      placeImg: place10,
      location: "Mysore",
      link: `${base_url}plans/trip-to-2 days mysore trip-1678804061.8047736.pdf`,
    },
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
              <Link to={val.link} target="_blank">
                <div
                  key={i}
                  className="flex items-center gap-5 rounded-lg hover:bg-emerald-300 transition-all duration-300 cursor-pointer hover:scale-105"
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
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
