import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {Paper, IconButton} from "@mui/material";
import {CardContent, Card, CardMedia, Typography} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import { demoProfilePicture } from "../utils/constants";


const ChannelCard = ({channelDetail}) => {

	// note, channelDetail is a prop coming from Video Component.
	// console.log(channelDetail);

	return (

		<Box sx={{ boxShadow: "none", borderRadius: "20px", display: "flex",
					justifyContent: "center", textAlign: "center",
					width: { xs: "356px", md: "320px" },
					height: "326px", margin: "auto" }}>
			<Link to={`/channel/${channelDetail?.id?.channelId}`}>
				<CardContent sx={{ display: "flex", flexDirection: "column",
									justifyContent: "center", textAlign: "center",
									color: "#FFF" }}>
					<CardMedia
						image={ channelDetail?.snippet?.thumbnail?.high?.url || demoProfilePicture }
						alt={ channelDetail?.snippet?.title}
						sx={{ borderRadius: "50%", height: "180px", width: "180px",
							mb: 2, border: "1px solid #e3e3e3" }}
					/>
					<Typography variant="h6">
						{ channelDetail?.snippet?.title}
						<CheckCircle sx={{ fontSize: 14, color: #DDD, ml: "5px"}} />
					</Typography>
					{ channelDetail?.statistics?.subscriberCount && (
						<Typography>
							{ parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()) } Subscribers 
							}
						</Typography>
				</CardContent>

			</Link>

		</Box>

		)
	
}

export default ChannelCard;