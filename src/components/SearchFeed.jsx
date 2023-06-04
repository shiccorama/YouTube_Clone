
import { React, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI.js";
import { useParams } from "react-router-dom";

const SearchFeed = () => {

    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data) => setVideos(data.items));
    }, [searchTerm]);

    return (

            <Box  sx={{ height:"90vh", flex: 2, overflowY: "auto"}}>
                <Typography variant="h4" fontWeight="bold" mb={2}
                        sx={{ color: "#fff" }} > 
                    Search Results for: <span style={{color: "#F31503"}}>{searchTerm}</span>
                </Typography>

                <Videos videos={videos} />
            </Box>
    )
    
}

export default SearchFeed;