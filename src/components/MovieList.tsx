import MovieCard from "./MovieCard";
import { MovieProp } from "../interfaces/IMovie";

export default function MovieList({ movies }: MovieProp) {
  return (
    <div className="MovieList">
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
