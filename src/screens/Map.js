import React, { useEffect, useState } from 'react'
import "./Home.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import { Grid, Typography } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import dayjs from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Map = (props) => {
    const [city, setCity] = React.useState(props.dst);
    const [type, setType] = React.useState('');
    const [locid, setLocid] = React.useState(0);
    const [date, setDate] = React.useState(dayjs('2023-04-23'));
    const [src, setSrc] = useState("")
    const [wayPoint, setWayPoint] = useState("");
    const [dst, setDst] = useState("")
    const [symbol, setSymbol] = React.useState("");
    const [maxTemp, setMaxTemp] = React.useState("");
    const [minTemp, setMinTemp] = React.useState("");
    const [phrase, setPhrase] = React.useState("");
    const [find, setFind] = useState(false);
    var website = "https://www.google.com/maps/embed/v1/place?q=" + city + `&key=${process.env.MAPKEY}`;
    var msg = "";
    useEffect(() => {
        if (city !== '') {
            const options = {
                method: 'GET',
                url: 'https://foreca-weather.p.rapidapi.com/location/search/' + city,
                params: { lang: 'en', country: 'in' },
                headers: {
                    'X-RapidAPI-Key': 'ede3c5163fmsh01abdacf07fd2b0p1c0e4bjsn1db1b15be576',
                    'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
                }
            };
            Axios.request(options).then(function (response) {
                setLocid(response.data.locations[0].id);
            }).catch(function (error) {
                console.error(error);
            });
        } else {
            setLocid(0)
        }
    }, [city])

    useEffect(() => {
        if (locid !== 0) {
            const options = {
                method: 'GET',
                url: 'https://foreca-weather.p.rapidapi.com/forecast/daily/' + locid,
                params: { alt: '0', tempunit: 'C', windunit: 'MS', periods: '12', dataset: 'full' },
                headers: {
                    'X-RapidAPI-Key': 'ede3c5163fmsh01abdacf07fd2b0p1c0e4bjsn1db1b15be576',
                    'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
                }
            };

            Axios.request(options).then(function (response) {
                console.log(response.data.forecast);
                response.data.forecast.map(item => {
                    if ("" + date.format("YYYY-MM-DD") === item.date) {
                        setMaxTemp(item.maxTemp);
                        setMinTemp(item.minTemp);
                        setPhrase(item.symbolPhrase);
                        setSymbol(item.symbol);
                    }
                })
            }).catch(function (error) {
                console.error(error);
            });
        } else {

        }

    }, [locid, date])
    const handleChange = (event, newType) => {
        setType(newType);
    };
    if (city === "") {
        website = `https://www.google.com/maps/embed/v1/place?q=pune&key=${process.env.MAPKEY}`;
        msg = "Type City name to view more";
    }
    else if (type === "") {
        website = `https://www.google.com/maps/embed/v1/place?q=" + city + "&key=${process.env.MAPKEY}`;
        msg = "Showing Map of " + city;
    } else if (type === "bus") {
        website = `https://www.google.com/maps/embed/v1/search?q=Bus+in+" + city + "&key=${process.env.MAPKEY}`;
        msg = "Bus Stops in " + city + " will be highlighted";
    }
    else if (type === "rail") {
        website = `https://www.google.com/maps/embed/v1/search?q=Railways+in+" + city + "&key=${process.env.MAPKEY}`;
        msg = "Train and Metro Stops in " + city + " will be highlighted";
    } else if (type === "air") {
        website = `https://www.google.com/maps/embed/v1/search?q=Airports+in+" + city + "&key=${process.env.MAPKEY}`;
        msg = "Airports in " + city + " will be highlighted";
    } else if (type === "hotels") {
        website = `https://www.google.com/maps/embed/v1/search?q=hotels+in+" + city + "&key=${process.env.MAPKEY}`;
        msg = "Hotels in " + city + " will be highlighted";
    } else if (type === "resto") {
        website = `https://www.google.com/maps/embed/v1/search?q=Restaurants+in+" + city + "&key=${process.env.MAPKEY}`;
        msg = "Restaurants in " + city + " will be highlighted";
    }
    if (type === "trial") {
        // website = `https://www.google.com/maps/embed/v1/directions?key=${process.env.MAPKEY}&origin=${src}&destination=${dst}&waypoints=${wayPoint}`;
        website = `https://www.google.com/maps/embed/v1/search?q=Restaurants+buses+in+" + city + "&key=${process.env.MAPKEY}`;
        msg = "Trial"
    }

    return (
        <>
            <div>
                <Grid container
                    justifyContent={"center"}
                >
                    <ToggleButtonGroup
                        color="primary"
                        value={type}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                    >
                        <ToggleButton value="bus">Buses</ToggleButton>
                        <ToggleButton value="air">Airport</ToggleButton>
                        <ToggleButton value="rail">Railways</ToggleButton>
                        <ToggleButton value="hotels">Hotels</ToggleButton>
                        <ToggleButton value="resto">Restaurants</ToggleButton>
                        <ToggleButton value="trial">Trial</ToggleButton>
                        <ToggleButton value="">None</ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
        </div>
        <div className="map">
            <div></div>
            <div style={{ maxHeight: "1000px", overflow: "hidden", color: "red", width: "100vw"}}>
                <div id="google-maps-display"><iframe title="Gmap" frameBorder="0"
                    src={website} ></iframe>
                </div>
            </div>
        </div>
        </>
    )
}

export default Map