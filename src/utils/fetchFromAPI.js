import axios from "axios";
// import {
//   CaptionList,
//   SuggestedVideos,
//   Search,
//   VideoComments,
//   VideoDetails,
//   ChannelDetails,
//   ChannelVideos,
//   PlaylistVideos,
//   PlaylistDetails,
// } from "./API_LIST.js";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const selectedCategory = "New";
const tryURL = `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&q=${selectedCategory}`;

const options = {
  method: 'GET',
  params: {
    maxResults: '50'
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  console.log(data.items);
  return data;
};



// export const fetchFromAPI = async (url) => {
//   const { data } = await axios.get(`${tryURL}`, options);
//   console.table(data.items);
//   return data;
// };