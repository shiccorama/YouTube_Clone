

import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {Paper, IconButton} from "@mui/material";
import {CardContent, Card, CardMedia, Typography} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";


const VideoCard = ({video: { id: { videoId }, snippet }}) => {
	// we're getting {item} from feed component, and we want to destructure it
	// {item: { id: { videoId }, snippet }}
	// note: video props coming from video component.
	// console.log(item);
	// console.log(videoId, snippet);

	return (

		<Card  sx={{ width: { md: "320px", xs: "100%"}, boxShadow: "none", borderRadius: 0 }} >

			<Link to={ videoId ? `/video/${videoId}` : demoVideoUrl }>
				<CardMedia 
						image={snippet?.thumbnails?.high?.url}
						alt={snippet?.title}
						sx={{ width: 385, height: 180 }}
				/>
			</Link>

			<CardContent
			 sx={{ backgroundColor: "1e1e1e", height: "106px" }} 
			>
						<Link to={ videoId ? `/video/${videoId}` : demoVideoUrl }>
							<Typography variant="subtitle1" fontWeight="bold" color="#FFF" >
								{ snippet?.title.slice(0,60) || demoVideoTitle.slice(0, 60) }
							</Typography>	
						</Link>

						<Link to={ snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl }>
							<Typography variant="subtitle2" fontWeight="bold" color="#DDD" >
								{ snippet?.channelTitle || demoChannelTitle }
								<CheckCircle sx={{ fontSize: 12, color: #DDD, ml: "5px"}}
							</Typography>	
						</Link>

			</ CardContent>


		</Card>



		)
	
}

export default VideoCard;