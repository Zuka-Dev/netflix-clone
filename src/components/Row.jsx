import { CircularProgress } from "@material-ui/core";
import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import instance from "../axios";
const imageurl = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchURL, style }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");
  const fetchData = async () => {
    // Linear Progress
    setLoading(true);
    const { data } = await instance.get(fetchURL);
    // console.log(data)
    setMovies(data.results);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [fetchURL]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <CircularProgress style={{ color: "white" }} size={130} />
      </div>
    );
  }
  return (
    <div className="row-container">
      <p className="row-title">{title}</p>
      <div className="card-slider">
        {movies.map((movie, i) => (
          // <Router key={i}>
          <Link to={`/${movie.id}`} key={i}>
            <img
              onMouseEnter={() => handleClick(movie)}
              src={`${imageurl}${movie.poster_path}`}
              alt={movie.name}
              style={style}
            />
          </Link>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
