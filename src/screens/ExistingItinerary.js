import React, { useState, useEffect } from 'react'
import contents from "../itinerary.json"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from "@mui/material";
import { Link } from 'react-router-dom'

const ExistingItinerary = () => {


    const base_url = "https://storage.googleapis.com/pdf-trip-plans/"

    const [content, setContent] = useState([]);
    const [search, setSearch] = useState(null);

    useEffect(() => {
        getContent(contents.ListBucketResult.Contents);
    }, []);

    const getContent = contentList => {
        setContent(contentList);
    };

    function parseString(str) {
        let info = str.split("-");
        let city = info[2]
        return city
    }

    const bySearch = (content, search) => {
        if (search) {
            return content.Key.toLowerCase().includes(search.toLowerCase());
        } else return content;
    }

    const filteredList = (content, search) => {
        return content
            .filter(con => bySearch(con, search));
    }

    return (
        <div className='relative md:mt-3  bg-gradient-to-t from-emerald-50 to-white'>
            <div className="travigo-container">

                <div className="flex items-center justify-center text-center mb-11 md:mb-7">
                    <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold filter drop-shadow-lg text-slate-900">
                        Existing Itineraries
                    </h1>
                </div>
                <div className="flex items-center justify-center text-center mb-11 md:mb-7">
                    <TextField
                        style={{ width: 620 }}
                        id="outlined-search" label="Country/City" type="search"
                        onChange={e => setSearch(e.target.value)} />
                </div>
                <br />
                <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                // className="grid items-center grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5"
                >

                    {
                        filteredList(content, search).map(city => (
                            <Grid item xs={3}>
                                <Link to={base_url + city.Key}>

                                    <Card sx={{ height: '8vw', Width: 275 }}

                                        className="bg-gradient-to-b from-emerald-300 to-green-300 shadow-lg shadow-emerald-200 flex items-center justify-center flex-col py-7 px-5 xl:p-5 rounded-lg text-slate-900 filter hover:scale-105 transition-all duration-400"

                                    >
                                        <CardContent>
                                            <Typography variant="h5" component="div"
                                            // className="text-lg sm:text-sm font-bold"

                                            >
                                                {parseString(city.Key)}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>

                            </Grid>
                        ))
                    }

                </Grid>

            </div>

        </div >


    )
}

export default ExistingItinerary

