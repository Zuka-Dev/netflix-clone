import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../axios";
import "../App.css";
import { CircularProgress } from "@material-ui/core";
const imageurl = "https://image.tmdb.org/t/p/original";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setloading] = useState(false)
  const { id } = useParams();
  const fetchDetails = async () => {
    setloading(true)
    const { data } = await instance.get(
      `/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    // console.log(data);
    setMovie(data);
    setloading(false)
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  console.log(movie);
  if (loading) {
    return <div className="loading"><CircularProgress style={{ color: "white" }} size={130} /></div> 
  }
  return (
    <div
      className="details-div"
      style={{ backgroundImage: `url(${imageurl}${movie.backdrop_path || movie.poster_path})` }}
    >
      <div className="details-coverup">
        <img src={`${imageurl}${movie.poster_path}`} alt="bg" />
        <div className="inner">
          <p className="details-title">{movie.title}</p>
          <div className="genre-div">
            {movie.genres?.map((genre) => (
              <span className="genre" key={genre.id}>{genre.name}</span>
            ))}
          </div>
          <p className="details-desc">{movie.overview}</p>
          <p className="ratings">{movie.vote_average}</p>
          <small className="details-release">
            Release: {movie.release_date}
          </small>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
