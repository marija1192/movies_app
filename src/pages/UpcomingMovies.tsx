import MovieList from "../components/MovieList";
import Error from "../components/Error";
import { useFetch } from "../hooks/useFetch";
import { fetchUpcomingMovies } from "../api/api";

function UpcomingMovies() {
  const {
    isFetching,
    error,
    fetchedData: upcomingMovies,
  } = useFetch(fetchUpcomingMovies, []);

  if (error) {
    return (
      <Error title={error.title} message={error.message} />
    );
  }
  return (
    <>
      <h1 className="movie-list">Upcoming</h1>
      {isFetching ? (
        <span>Loading...</span>
      ) : (
        <MovieList movies={upcomingMovies} />
      )}
    </>
  );
}
export default UpcomingMovies;
