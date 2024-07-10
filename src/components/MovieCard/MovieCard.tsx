import { Link } from "react-router-dom";
import { MovieProp } from "../../interfaces/IMovie";
import classes from "./MovieCard.module.css";
import placeholderImage from "./../../assets/placeholder.png";

export default function MovieCard({ movie }: MovieProp) {
  return (
    <>
      {movie ? (
        <div className={classes.movie_card}>
          <div className={classes.image_container}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : placeholderImage
              }
              alt={movie.title}
            />
          </div>
          <div className={classes.movie_details}>
            <h3 className={classes.movie_title}>{movie.title}</h3>
            <p className={classes.movie_release_date}>
              <span>Release Date:</span>{" "}
              {movie.release_date ? movie.release_date : "Not released"}
            </p>
            <p className={classes.movie_rating}>
              <span>Rating:</span>{" "}
              {movie.vote_average !== 0 ? movie.vote_average : "No rating"}
            </p>
            <Link className={classes.link_details} to={`/movie/${movie.id}`}>
              View details
            </Link>
          </div>
        </div>
      ) : (
        <p>Movie doesn't exist</p>
      )}
    </>
  );
}
