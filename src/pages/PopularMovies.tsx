import MovieList from "../components/MovieList";
import Error from "../components/Error";
import { useFetch } from "../hooks/useFetch";
import { fetchPopularMovies } from "../api/api";

function PopularMovies() {
  const {
    isFetching,
    error,
    fetchedData: popularMovies,
  } = useFetch(fetchPopularMovies, []);

  if (error) {
    return (
      <Error title={error.title} message={error.message} />
    );
  }
  return (
    <>
      <h1 className="movie-list">Popular</h1>
      {isFetching ? (
        <span>Loading...</span>
      ) : (
        <MovieList movies={popularMovies} />
      )}
    </>
  );
}
export default PopularMovies;
