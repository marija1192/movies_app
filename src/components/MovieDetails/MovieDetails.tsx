import { MovieProp } from "../../interfaces/IMovie";

import classes from "./MovieDetails.module.css";

export default function MovieDetails({ movie }: MovieProp) {
  if (!movie) {
    return <p>No movie available.</p>;
  }

  const movieVideos = movie.videos?.results ?? [];
  const trailerVideo = movieVideos.find((video) => video.type === "Trailer");
  const videoKey = trailerVideo?.key;

  const videoLink = videoKey
    ? `https://www.youtube.com/embed/${videoKey}?rel=0`
    : "";

  return (
    <div className={classes.movie_details_container}>
      <h1>{movie.title}</h1>
      <div className={classes.container}>
        <div className={classes.trailer_container}>
          {videoLink ? (
            <iframe
              title="trailer"
              className={classes.trailer}
              src={videoLink}
              allowFullScreen
            />
          ) : (
            <p>No trailer available.</p>
          )}
        </div>
        <div className={classes.movie_overview}>
          <h5>Plot</h5>
          <p>{movie.overview}</p>
          <div className={classes.genre_container}>
            <span className={classes.genre_label}>Genres: </span>
            {movie.genres?.map((genre) => (
              <span className={classes.genre_name} key={genre.id}>
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
