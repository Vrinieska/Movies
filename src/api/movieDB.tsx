import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '71e6ff816ca76db1c9ad5f44b6f5a567',
    language: 'en-US',
  },
});

export default movieDB;
