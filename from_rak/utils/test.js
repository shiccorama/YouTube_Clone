const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/playlistItems',
  params: {
    playlistId: 'RDZiQo7nAkQHU',
    part: 'snippet',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'fd4fbc07e7mshafa446a037b7027p157110jsn4ff84fd7b5bc',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}