import { MovieProp } from "../../interfaces/IMovie";
import MovieCard from "../MovieCard/MovieCard";
import classes from "./MovieList.module.css"

export default function MovieList({ movies }: MovieProp) {
  return (
      <div className={classes.movie_list}>
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
