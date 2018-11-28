import axios from 'axios';

const KEY = 'AIzaSyBGh5-qmcLIxf6ym88ZecwtF4Wv-SMAa6k';
const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY
    }
  }
);

export default youtube;