import React, { useEffect, useState } from "react";
import instance from "../axios";
import request from "../request";

const imageurl = "https://image.tmdb.org/t/p/original/";
const Banner = () => {
  const [movie, setMovie] = useState({});
  const fetchData = async () => {
    const { data } = await instance.get(request.fetchTrending);
    // console.log(data.results[Math.floor(Math.random() * data.results.length - 1)])
    setMovie(data.results[Math.floor(Math.random() * data.results.length - 1)]);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " . . ." : str;
  }
  return (
    <header
      className="banner-div"
      style={{ backgroundImage: `url(${imageurl}${movie?.backdrop_path})` }}
    >
      <div className="banner-contents">
        <p className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </p>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <p className="banner-desc">{truncate(movie?.overview, 150)}</p>
      </div>
      <div className="faded"></div>
    </header>
  );
};

export default Banner;
