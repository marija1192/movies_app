
import Error from "../components/Error";
import { useFetch } from "../hooks/useFetch";
import { fetchPopularMovies } from "../api/api";
import MovieList from "../components/MovieList/MovieList";

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
      {isFetching ? (
        <span>Loading...</span>
      ) : (
        <MovieList movies={popularMovies} />
      )}
    </>
  );
}
export default PopularMovies;
