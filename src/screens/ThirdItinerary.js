import { Box, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import sources from "../sources.json";

export default function ThirdItinerary() {
  // Form for User Input
  const [from, setFrom] = useState("");
  const [season, setSeason] = useState("");

  function handleChange(e) {
    setFrom(e.target.value);
  }

  function Form() {
    return (
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={from}
            label="Age"
            onChange={handleChange}
          >
            {sources.cityList.map((city) => {
              return (
                <MenuItem value={`${city.poiId}`}>
                  {city.name}, {city.subText}
                </MenuItem>
              );
            })}
          </Select>
          <TextField id="outlined-disabled" label="Choose a season" />
          <TextField
            id="outlined-password-input"
            label="Budget in ₹"
            type="password"
            autoComplete="Your budget"
          />
          <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField id="outlined-search" label="Search field" type="search" />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </div>
        <div>
          <TextField
            required
            id="filled-required"
            label="Required"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            disabled
            id="filled-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
          <TextField
            id="filled-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
          />
          <TextField
            id="filled-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="filled"
          />
        </div>
        <div>
          <TextField
            required
            id="standard-required"
            label="Required"
            defaultValue="Hello World"
            variant="standard"
          />
          <TextField
            disabled
            id="standard-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="standard"
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
          <TextField
            id="standard-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <TextField
            id="standard-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
          />
          <TextField
            id="standard-search"
            label="Search field"
            type="search"
            variant="standard"
          />
          <TextField
            id="standard-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="standard"
          />
        </div>
      </Box>
    );
  }

  return (
    <>
      <h1>Third Party Itineraries</h1>
      <Form />
    </>
  );
}
