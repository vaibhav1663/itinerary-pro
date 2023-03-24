import { Box, MenuItem, Select, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import sources from "./sources.json"
import seasons from "./seasons.json"
import MediaCard from "./PlaceCard";

export default function ThirdItinerary() {
    // Form for User Input
    const [from, setFrom] = useState("");
    const [season, setSeason] = useState("");

    function handleFrom(e){
        setFrom(e.target.value);
    }

    function handleSeason(e){
        setSeason(e.target.value);
    }

    console.log(seasons);

    function Form() {
        return (
            <Box
                component="form"
                noValidate  
                autoComplete="off"
            >
                <div>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={from}
                        label="Traveling from"
                        onChange={handleFrom}
                    >
                        {sources.cityList.map((city) => {
                            return (
                                <MenuItem value={`${city.poiId}`}>{city.name}, {city.subText}</MenuItem>
                            )
                        })}
                    </Select>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={season}
                        label="Season"
                        onChange={handleSeason}
                    >
                        {Object.values(seasons).map((s) => {
                            return (
                                <MenuItem value={`${s.val}`}>{s.name}</MenuItem>
                            )
                        })}
                    </Select>
                </div>
            </Box>
        )
    }

    console.log(from, season);

    useEffect(() => {

        async function getTrips(season, from){
            await fetch("https://hubble.makemytrip.com/hubble/destListingFiltered", {
                "credentials": "omit",
                "headers": {
                    "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/110.0",
                    "Accept": "application/json",
                    "Accept-Language": "en-US,en;q=0.5",
                    "Content-Type": "application/json",
                    "os": "desktop 1.0",
                    "ver": "1.0",
                    "deviceid": "59039f5f-c9e7-4a52-a255-ebceaed6c674",
                    "region": "IN",
                    "Sec-Fetch-Dest": "empty",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Site": "same-site"
                },
                "referrer": "https://www.makemytrip.com/",
                "body": "{\"autoSuggestTile\":null,\"queryId\":\"$4$$$$$$$$CTPNQ$\",\"schema\":\"id`ul`tt`tl`dt`td`tds`pr`ti`cp`sd`wl`prf`ct`sp\",\"delimiter\":\"`\",\"initial\":true,\"srcPoiId\":\"CTIXA\",\"appliedFilterValues\":{\"catIds\":[],\"selQueryCat\":null,\"budget\":null,\"time\":null,\"season\":null},\"notReadQueryId\":true,\"collectionId\":null,\"deeplink\":false,\"timestamp\":1679632917272}",
                "method": "POST",
                "mode": "cors"
            }).then((res) => {
                return res.json();
            }).then((data) => {
                console.log(data);
            });
        }

        getTrips();
    }, [from, season])

    return (
        <>
            <h1>Third Party Itineraries</h1>
            <Form />
        </>
    )
}
