let selectedCategory, id, searchTerm, videoId = "";

export const CaptionList = `captions?videoId=M7FIvfx5J10&part=snippet`;
export const SuggestedVideos = `search?part=id%2Csnippet&type=video&q=${selectedCategory}`;
export const Search = `search/${searchTerm}`;
export const VideoComments = `commentThreads?videoId=${videoId}&part=snippet&maxResults=100`;
export const VideoDetails = `videos?id=7ghhRHRP6t4&part=contentDetails%2Csnippet%2Cstatistics`;
export const ChannelDetails = `channels?id=${id}&part=snippet%2Cstatistics`;
export const ChannelVideos = `search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date&maxResults=50`;
export const PlaylistVideos = `playlistItems?playlistId=RDZiQo7nAkQHU&part=snippet`;
export const PlaylistDetails = `playlists?id=${id}&part=snippet`;