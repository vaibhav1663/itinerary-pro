import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import sources from "../sources.json";
import seasons from "../seasons.json";
import themesJSON from "../themes.json";
import BasicCard from "./PlaceCard2";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { navlinks } from "../data/staticdata.js";
import Heading from "../components/Heading";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function ThirdItinerary() {
  // Form for User Input
  const [from, setFrom] = useState("");
  const [season, setSeason] = useState([]);
  const [themes, setThemes] = useState([]);
  const [loc, setLoc] = useState("");
  const [budget, setBudget] = useState(100000000000000);
  const [travelDura, setTravelDur] = useState(64);
  const [iti, setIti] = useState([]);

  const handleSeason = (event) => {
    const {
      target: { value },
    } = event;
    setSeason(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleThemes = (event) => {
    const {
      target: { value },
    } = event;
    setThemes(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleLoc = (event) => {
    setLoc(event.target.value);
  };

  const handleBudget = (event) => {
    setBudget(event.target.value);
  };

  const handleTravelDur = (event) => {
    setTravelDur(event.target.value);
  };

  function handleFrom(e) {
    setFrom(e.target.value);
  }

  function parseBudget(budgetFor) {
    console.log(budgetFor.split(" ")[2]);
    return budgetFor.split(" ")[2];
  }

  function parseTravelDur(travelDur) {
    let split = travelDur.split(" ");
    console.log(travelDur.split(" "));
    split = split.map((tok) => {
      return tok.replace(/\D/g, "");
    });
    console.log(split);
    return split;
  }

  useEffect(() => {
    setIti([]);

    function editPayload() {
      let obj = JSON.parse(
        '{"autoSuggestTile":null,"queryId":"$4$$$$$$$$CTPNQ$","schema":"id`ul`tt`tl`dt`td`tds`pr`ti`cp`sd`wl`prf`ct`sp","delimiter":"`","initial":true,"srcPoiId":"${}","appliedFilterValues":{"catIds":[],"selQueryCat":null,"budget":null,"time":null,"season":null},"notReadQueryId":true,"collectionId":null,"deeplink":false,"timestamp":1679632917272}'
      );
      obj["appliedFilterValues"]["season"] = season;
      obj["srcPoiId"] = from;
      obj["appliedFilterValues"]["catIds"] = themes;
      obj["appliedFilterValues"]["selQueryCat"] = loc;
      console.log(JSON.stringify(obj));
      return obj;
    }

    async function getTrips(season, from) {
      await fetch("https://hubble.makemytrip.com/hubble/destListingFiltered", {
        credentials: "omit",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/110.0",
          Accept: "application/json",
          "Accept-Language": "en-US,en;q=0.5",
          "Content-Type": "application/json",
          os: "desktop 1.0",
          ver: "1.0",
          deviceid: "59039f5f-c9e7-4a52-a255-ebceaed6c674",
          region: "IN",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-site",
        },
        referrer: "https://www.makemytrip.com/",
        body: JSON.stringify(editPayload()),
        method: "POST",
        mode: "cors",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          Object.values(data.data.contentList).forEach((info) => {
            let splitInfo = info.split("`");
            const placeInfo = {
              img: splitInfo[1],
              name: splitInfo[2],
              subText: splitInfo[3],
              desc: splitInfo[4],
              dist: splitInfo[6],
              id: splitInfo[9],
              redirect: splitInfo[14],
              budget: splitInfo[12],
              budgetFor: parseBudget(splitInfo[10]),
              travelDur: parseTravelDur(splitInfo[5]),
            };
            console.log(splitInfo);
            setIti((prev) => {
              return [...prev, placeInfo];
            });
          });
        });
    }

    getTrips();
  }, [from, season, themes, loc]);

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="bg-gradient-to-r from-emerald-50 to-green-100 min-h-screen">
      <Navbar navlinks={navlinks} />
      <div className="relative  py-7 md:pt-3 md:pl-10">
        <Heading heading="MakeMyTrip Itineraries" />
      </div>
      <Box component="form">
        <Grid container direction={"row"} justifyContent={"center"}>
          <Grid item>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 180 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Travelling From
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={from}
                onChange={handleFrom}
                MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
              >
                {sources.cityList.map((city) => {
                  return (
                    <MenuItem value={`${city.poiId}`}>
                      {city.name}, {city.subText}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl
              variant="filled"
              sx={{ m: 1, minWidth: 180, maxWidth: 300 }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Seasons
              </InputLabel>
              <Select
                multiple
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={season}
                onChange={handleSeason}
                MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
              >
                {Object.values(seasons).map((s) => {
                  return <MenuItem value={`${s.val}`}>{s.name}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl
              variant="filled"
              sx={{ m: 1, minWidth: 180, maxWidth: 300 }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Themes
              </InputLabel>
              <Select
                multiple
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={themes}
                onChange={handleThemes}
                MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
              >
                {Object.keys(themesJSON["themes"]).map((where) => {
                  return (
                    <MenuItem value={`${themesJSON.themes[where]}`}>
                      {where}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl
              variant="filled"
              sx={{ m: 1, minWidth: 180, maxWidth: 300 }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Location
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={loc}
                onChange={handleLoc}
                MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
              >
                {Object.keys(themesJSON["where"]).map((where) => {
                  return (
                    <MenuItem value={`${themesJSON.where[where]}`}>
                      {where}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 80 }}>
              <TextField
                label="Budget"
                type="number"
                onChange={handleBudget}
                sx={{ maxWidth: 100 }}
                InputProps={{ inputProps: { min: 1000 } }}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 180 }}>
              <TextField
                label="Travel Duration (in hours)"
                type="number"
                onChange={handleTravelDur}
                sx={{ maxWidth: 180 }}
                InputProps={{ inputProps: { min: 1, max: 24 } }}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          sx={{
            maxWidth: `100vw`,
            marginTop: "16px",
            marginBottom: "16px",
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={2}
        >
          {iti.map((recc) => {
            console.log(recc.budget, budget);
            if (
              parseInt(recc.budget) <=
                (budget === "" ? 100000000000000 : budget) &&
              (travelDura === "" ? 64 : travelDura) >= recc.travelDur[0]
            ) {
              return (
                <Grid item>
                  <BasicCard info={recc} />
                </Grid>
              );
            }
          })}
        </Grid>
      </Box>
    </div>
  );
}
