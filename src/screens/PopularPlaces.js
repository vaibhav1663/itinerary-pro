import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { navlinks } from "../data/staticdata.js";
import Heading from "../components/Heading";
import mapping from "../city_num_mapping.json";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
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
const base_url = "https://www.getyourguide.com";

const PopularPlaces = () => {
  const [to, setTo] = useState("");
  const [attraction, setAttraction] = useState([]);
  function handleTo(e) {
    setTo(e.target.value);
  }
  const places = [
    place1,
    place3,
    place4,
    place5,
    place6,
    place7,
    place8,
    place9,
    place10,
  ];
  useEffect(() => {
    setAttraction([]);

    async function getAttractions() {
      // console.log(mapping.list)
      // console.log(to)
      let index = to;
      await fetch(
        `https://travelers-api.getyourguide.com/locations/${index}/seo-links`,
        {
          credentials: "omit",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Accept-Language": "en-US",
            "accept-currency": "INR",
            "geo-ip-country": "IN",
            "x-gyg-geoip-country": "IN",
            "x-gyg-app-type": "Web",
            "x-allow-cache": "true",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-site",
          },
          referrer: "https://www.getyourguide.com/",
          method: "GET",
          mode: "cors",
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // console.log(data)
          Object.values(data.seoLinks.poi.sections[0]["items"]).forEach(
            (info) => {
              const placeInfo = {
                label: info["label"],
                img: places[Math.floor(Math.random() * 9)],
                url: info["url"],
              };
              // console.log(placeInfo);
              setAttraction((prev) => {
                return [...prev, placeInfo];
              });
            }
          );
        });
    }
    getAttractions();
  }, [to]);
  return (
    <div
      style={{ mindHeight: "100vh", padding: 20 }}
      className="pt-10 bg-gradient-to-r from-emerald-50 to-green-100"
    >
      <Navbar navlinks={navlinks} />
      <Heading heading="Popular Places" />
      <div className="relative py-7 md:pt-3 flex justify-center items-center sm:w-full">
        <FormControl
          className=""
          variant="filled"
          sx={{ m: 1, minWidth: 180, width: "20%" }}
        >
          <InputLabel id="demo-simple-select-standard-label">
            Select Destination
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={to}
            onChange={handleTo}
            MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
          >
            {mapping.list.map((city) => {
              return <MenuItem value={`${city.index}`}>{city.city}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
      {
        <div className="m-5 grid items-center grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
          {attraction.map((val, i) => (
            <Link to={base_url + val.url} target="_blank">
              <div
                key={i}
                className="flex items-center gap-5 rounded-lg hover:bg-emerald-300 transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <div className="flex items-center">
                  <img
                    src={place1}
                    alt={val.label}
                    className="w-20 h-20 sm:w-16 sm:h-16 rounded-lg filter drop-shadow-lg"
                  />
                </div>
                <div className="flex items-start flex-col text-slate-900">
                  <h1 className="text-lg sm:text-sm font-bold">{val.label}</h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      }
    </div>
  );
};

export default PopularPlaces;
