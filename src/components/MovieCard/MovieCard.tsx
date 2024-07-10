import { Link } from "react-router-dom";
import { MovieProp } from "../../interfaces/IMovie";
import classes from "./MovieCard.module.css";

export default function MovieCard({ movie }: MovieProp) {
  return (
    <>
      <div className={classes.movie_card}>
        <div className={classes.image_container}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt={movie?.title}
          />
        </div>
        <div className={classes.movie_details}>
          <h3 className={classes.movie_title}>{movie?.title}</h3>
          <p className={classes.movie_release_date}>
            <span>Release Date:</span> {movie?.release_date}
          </p>
          <p className={classes.movie_rating}>
            <span>Rating:</span> {movie?.vote_average}
          </p>
          <Link className={classes.link} to={`/movie/${movie?.id}`}>View details</Link>
        </div>
      </div>
    </>
  );
}
