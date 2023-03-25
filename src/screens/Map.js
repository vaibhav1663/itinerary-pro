import React, { useEffect, useState } from "react";
import "./Home.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Grid, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import dayjs from "dayjs";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Map = (props) => {
    console.log(props.dst);
  const [city, setCity] = React.useState(props.dst);
  const [type, setType] = React.useState("");
  const [locid, setLocid] = React.useState(0);
  const [date, setDate] = React.useState(dayjs("2023-04-23"));
  const [src, setSrc] = useState("");
  const [wayPoint, setWayPoint] = useState("");
  const [dst, setDst] = useState("");
  const [symbol, setSymbol] = React.useState("");
  const [maxTemp, setMaxTemp] = React.useState("");
  const [minTemp, setMinTemp] = React.useState("");
  const [phrase, setPhrase] = React.useState("");
  const [find, setFind] = useState(false);
  const [website, setWebsite] = useState("https://www.google.com/maps/embed/v1/place?q=" +
  city +
  `&key=${process.env.REACT_APP_MAPKEY}`)
  var msg = "";

  useEffect(() => {
    setCity(props.dst)
    setWebsite("https://www.google.com/maps/embed/v1/place?q=" +
    city +
    `&key=${process.env.REACT_APP_MAPKEY}`)
  }, [props.dst])
//   useEffect(() => {
//     if (city !== "") {
//       const options = {
//         method: "GET",
//         url: "https://foreca-weather.p.rapidapi.com/location/search/" + city,
//         params: { lang: "en", country: "in" },
//         headers: {
//           "X-RapidAPI-Key":
//             "ede3c5163fmsh01abdacf07fd2b0p1c0e4bjsn1db1b15be576",
//           "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
//         },
//       };
//       Axios.request(options)
//         .then(function (response) {
//           setLocid(response.data.locations[0].id);
//         })
//         .catch(function (error) {
//           console.error(error);
//         });
//     } else {
//       setLocid(0);
//     }
//   }, [city]);

//   useEffect(() => {
//     if (locid !== 0) {
//       const options = {
//         method: "GET",
//         url: "https://foreca-weather.p.rapidapi.com/forecast/daily/" + locid,
//         params: {
//           alt: "0",
//           tempunit: "C",
//           windunit: "MS",
//           periods: "12",
//           dataset: "full",
//         },
//         headers: {
//           "X-RapidAPI-Key":
//             "ede3c5163fmsh01abdacf07fd2b0p1c0e4bjsn1db1b15be576",
//           "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
//         },
//       };

//       Axios.request(options)
//         .then(function (response) {
//           console.log(response.data.forecast);
//           response.data.forecast.map((item) => {
//             if ("" + date.format("YYYY-MM-DD") === item.date) {
//               setMaxTemp(item.maxTemp);
//               setMinTemp(item.minTemp);
//               setPhrase(item.symbolPhrase);
//               setSymbol(item.symbol);
//             }
//           });
//         })
//         .catch(function (error) {
//           console.error(error);
//         });
//     } else {
//     }
//   }, [locid, date]);
  const handleChange = (event, newType) => {
    setType(newType);
  };
  useEffect(() => {
    if (city === "") {
        setWebsite(`https://www.google.com/maps/embed/v1/place?q=pune&key=${process.env.REACT_APP_MAPKEY}`);
        msg = "Type City name to view more";
      } else if (type === "") {
        setWebsite("https://www.google.com/maps/embed/v1/place?q=" + city + `&key=${process.env.REACT_APP_MAPKEY}`);
        msg = "Showing Map of " + city;
      } else if (type === "bus") {
        setWebsite("https://www.google.com/maps/embed/v1/search?q=Bus+in+" +
        city.split(", ")[0] +
        `&key=${process.env.REACT_APP_MAPKEY}`)
        msg = "Bus Stops in " + city + " will be highlighted";
      } else if (type === "rail") {
        setWebsite("https://www.google.com/maps/embed/v1/search?q=Railways+in+" +
        city +
        `&key=${process.env.REACT_APP_MAPKEY}`)
        msg = "Train and Metro Stops in " + city + " will be highlighted";
      } else if (type === "air") {
        setWebsite("https://www.google.com/maps/embed/v1/search?q=Airports+in+" +
        city +
        `&key=${process.env.REACT_APP_MAPKEY}`)
        msg = "Airports in " + city + " will be highlighted";
      } else if (type === "hotels") {
        setWebsite("https://www.google.com/maps/embed/v1/search?q=hotels+in+" +
        city +
        `&key=${process.env.REACT_APP_MAPKEY}`)
        msg = "Hotels in " + city + " will be highlighted";
      } else if (type === "resto") {
        setWebsite("https://www.google.com/maps/embed/v1/search?q=Restaurants+in+" +
        city +
        `&key=${process.env.REACT_APP_MAPKEY}`)
        msg = "Restaurants in " + city + " will be highlighted";
      }
      console.log("here");
  }, [city, type])
  
//   if (type === "trial") {
//     // website = `https://www.google.com/maps/embed/v1/directions?key=${process.env.REACT_APP_MAPKEY}&origin=${src}&destination=${dst}&waypoints=${wayPoint}`;
//     setWebsite("https://www.google.com/maps/embed/v1/search?q=Restaurants+buses+in+" +
//     city +
//     `&key=${process.env.REACT_APP_MAPKEY}`)
//     msg = "Trial";
//   }

  return (
    <>
      <div>
        <Grid container justifyContent={"center"}>
          <ToggleButtonGroup
            color="primary"
            value={type}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="bus">
              <div className="flex items-start flex-col text-slate-900">
                <h1 className="text-lg sm:text-sm font-bold">bus stations</h1>
              </div>
            </ToggleButton>
            <ToggleButton value="air">
              <div className="flex items-start flex-col text-slate-900">
                <h1 className="text-lg sm:text-sm font-bold">airports</h1>
              </div>
            </ToggleButton>
            <ToggleButton value="rail">
              <div className="flex items-start flex-col text-slate-900">
                <h1 className="text-lg sm:text-sm font-bold">Railways</h1>
              </div>
            </ToggleButton>
            <ToggleButton value="hotels">
              <div className="flex items-start flex-col text-slate-900">
                <h1 className="text-lg sm:text-sm font-bold">hotels</h1>
              </div>
            </ToggleButton>
            <ToggleButton value="resto">
              <div className="flex items-start flex-col text-slate-900">
                <h1 className="text-lg sm:text-sm font-bold">restaurants</h1>
              </div>
            </ToggleButton>
            {/* <ToggleButton value="trial">
              <div className="flex items-start flex-col text-slate-900">
                <h1 className="text-lg sm:text-sm font-bold">trial</h1>
              </div>
            </ToggleButton>
            <ToggleButton value="">
              <div className="flex items-start flex-col text-slate-900">
                <h1 className="text-lg sm:text-sm font-bold">None</h1>
              </div>
            </ToggleButton> */}
          </ToggleButtonGroup>
        </Grid>
      </div>
      <div className="map justify-center">
        <div
          style={{
            maxHeight: "1000px",
            overflow: "hidden",
            color: "red",
            width: "80vw",
          }}
        >
          <div id="google-maps-display">
            <iframe title="Gmap" frameBorder="0" src={website}></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
