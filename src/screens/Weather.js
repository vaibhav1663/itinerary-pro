import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Typography } from "@mui/material";

export default function Weather(props){
    const [weather, setWeather] = useState([]);
    const [locid, setLocid] = useState(0);

    useEffect(() => {
        console.log("weather", props.dst);
        setLocid(0);
          if (props.dst !== "") {
            const search = encodeURIComponent(`${props.dst.split(",")[0]}`)
            const options = {
                method: 'GET',
                url: `https://foreca-weather.p.rapidapi.com/location/search/${search}`,
                params: {lang: 'en'},
                headers: {
                    'X-RapidAPI-Key': 'd7cf975d26mshad9046c0570fc82p1651adjsn172eaecfa72e',
                    'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
                }
            };
            console.log(options.url);
            Axios.request(options)
            .then(function (response) {
              setLocid(response.data.locations[0].id);
              console.log(locid);
            })
            .catch(function (error) {
              console.error(error);
            });
        } else {
          setLocid(0);
        }
      }, [props.dst]);

      useEffect(() => {
        if (locid !== 0) {
          const options = {
            method: "GET",
            url: "https://foreca-weather.p.rapidapi.com/forecast/daily/" + locid,
            params: {
              alt: "0",
              tempunit: "C",
              windunit: "MS",
              periods: "12",
              dataset: "full",
            },
            headers: {
              "X-RapidAPI-Key":
                "ede3c5163fmsh01abdacf07fd2b0p1c0e4bjsn1db1b15be576",
              "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
            },
          };
    
          Axios.request(options)
            .then(function (response) {
              console.log(response.data.forecast);
              if (response.data.forecast.length===0){
                setWeather([]);
              } else{
                setWeather(response.data.forecast.slice(0, 7));
              }
            })
            .catch(function (error) {
              console.error(error);
            });
        } else {
          setWeather([]);
        }
      }, [locid]);

    return (
        <div className="relative  md:mt-6 bg-gradient-to-b from-emerald-200 to-white">
        <div className="travigo-container" style={{ paddingBottom: "50px" }}>
          <div className="flex items-center justify-center text-center mb-11 md:mb-7">
            <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold filter drop-shadow-lg text-slate-900">
              Weather
            </h1>
          </div>
          <div className="d-flex items-center justify-center">
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
              {weather.length === 0 ? (
                <p className="text-lg xl:text-base sm:text-sm xsm:text-xs font-medium">
                  Sorry weather not available for this city
                </p>
              ) : (
                weather.map((item) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      flexDirection: "column",
                      width: "300px",
                      padding: "7px",
                      margin: "15px",
                      borderRadius: "8px"
                    }}
                    className={"bg-gradient-to-b from-blue-300 to-green-300 shadow-lg shadow-emerald-200 flex items-center justify-center flex-col py-7 px-5 xl:p-5 rounded-lg text-slate-900 filter cursor-pointer hover:scale-105 transition-all duration-400"}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        borderRadius: "8px",
                        width: "100%"
                      }}
                    >
                      <div style={{ padding: "5px", textAlign: "center" }}>
                        <Typography color="text.secondary">
                          {"Min"}
                        </Typography>
                        <p className="text-lg xl:text-base sm:text-sm xsm:text-xs font-medium">
                          {item.minTemp + "°C"}
                        </p>
                      </div>
                      <div style={{ padding: "5px", fontWeight: "bolder" }}>
                        <h4>{item.date}</h4>
                      </div>
                      <div style={{ padding: "5px", textAlign: "center" }}>
                        <Typography color="text.secondary">
                          {"Max"}
                        </Typography>
                        <p className="text-lg xl:text-base sm:text-sm xsm:text-xs font-medium">
                          {item.maxTemp + "°C"}
                        </p>
                      </div>
                    </div>
                    <img
                      src={
                        "https://developer.foreca.com/static/images/symbols/" +
                        item.symbol +
                        ".png"
                      }
                      alt="forecast"
                    ></img>
                    <p className="text-2xl xl:text-2xl sm:text-xl font-bold drop-shadow-lg">
                      {item.symbolPhrase}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    )
}
