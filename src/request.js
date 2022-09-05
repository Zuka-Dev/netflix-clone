export const REACT_APP_API_KEY = "6775df9b7d0c9d847f733217bec9d75a";
const request = {
  fetchTrending: `/trending/all/week?api_key=${REACT_APP_API_KEY}&language=en-US`,
  fetchNetfixOriginals: `/discover/tv?api_key=${REACT_APP_API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${REACT_APP_API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres=99`,
};

export default request;
