import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Paper, IconButton} from "@mui/material";
import {Box, Stack, Typography} from "@mui/material";
import {Search} from "@mui/icons-material";

import { videoCard, ChannelCard } from "./";


const Videos = ({videos}) => {

	// console.log(videos);


	return (

	<Stack
		direction="row" flexWrap="wrap" justifyContent="start" gap={2} >
		{videos.map( (item, index) => (
			<Box key={index}>
				{item.id.videoId && <videoCard video={item} />}
				{item.id.channelId && <ChannelCard channelDetail={item} />}
			</Box>
			))}
	</Stack>

		)
	
}

export default Videos;