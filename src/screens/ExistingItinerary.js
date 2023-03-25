import React, { useState, useEffect } from "react";
import contents from "../itinerary.json";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { navlinks } from "../data/staticdata.js";
import Heading from "../components/Heading";

const ExistingItinerary = () => {
  const base_url = "https://storage.googleapis.com/pdf-trip-plans/";

  const [content, setContent] = useState([]);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    getContent(contents.ListBucketResult.Contents);
  }, []);

  const getContent = (contentList) => {
    setContent(contentList);
  };

  function parseString(str) {
    let info = str.split("-");
    let city = info[2];
    return city;
  }

  const bySearch = (content, search) => {
    if (search) {
      return content.Key.toLowerCase().includes(search.toLowerCase());
    } else return content;
  };

  const filteredList = (content, search) => {
    return content.filter((con) => bySearch(con, search));
  };

  return (
    <>
      <Navbar navlinks={navlinks} />

      <div className="relative py-7 md:pt-3 bg-gradient-to-r from-emerald-50 to-green-100 min-h-screen">
        <div className="travigo-container">
          <Heading heading="Existing Itineraries" />
          <div className="flex items-center justify-center text-center mb-11 md:mb-7">
            <TextField
              style={{ width: 620 }}
              id="outlined-search"
              label="Search Country/City"
              type="search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <br />
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            {filteredList(content, search).map((city) => (
              <Grid item xs={3}>
                <Link to={base_url + city.Key} target="_blank">
                  <Card
                    sx={{ height: "8vw", Width: 275 }}
                    className="bg-gradient-to-b from-emerald-300 to-green-300 shadow-lg shadow-emerald-200 flex items-center justify-center flex-col py-7 px-5 xl:p-5 rounded-lg text-slate-900 filter hover:scale-105 transition-all duration-400"
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        // className="text-lg sm:text-sm font-bold"
                      >
                        {parseString(city.Key)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default ExistingItinerary;
