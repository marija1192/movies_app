import { MovieProp } from "../../interfaces/IMovie";

import classes from "./MovieDetails.module.css";

export default function MovieDetails({ movie }: MovieProp) {
  const movieVideos = movie?.videos?.results ?? [];
  const trailerVideo = movieVideos.find((video) => video.type === "Trailer");
  const videoKey = trailerVideo?.key;

  const videoLink = videoKey
    ? `https://www.youtube.com/embed/${videoKey}?rel=0`
    : "";

  return (
    <div>
      <h1>{movie?.title}</h1>
      <div className={classes.container}>
        {videoLink ? (
          <div className={classes.trailer_container}>
            <iframe
              title="trailer"
              className={classes.trailer}
              src={videoLink}
              allowFullScreen
            />
          </div>
        ) : (
          <p>No trailer available.</p>
        )}
        <div className={classes.movie_overview}>
          <h5>Plot</h5>
          <p>{movie?.overview}</p>
          <div className={classes.genre_container}></div>
          <span className={classes.genre_label}>Genres: </span>
          {movie?.genres?.map((genre) => (
            <span key={genre.id}>{genre.name} </span>
          ))}
        </div>
      </div>
    </div>
  );
}
