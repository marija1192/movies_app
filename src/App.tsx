import "./App.css";
import MovieList from "./components/MovieList";
import Error from "./components/Error";
import { useFetch } from "./hooks/useFetch";
import { fetchPopularMovies } from "./api/api";

function App() {
  const {
    isFetching: isFetchingPopular,
    error: errorPopular,
    fetchedData: popularMovies,
  } = useFetch(fetchPopularMovies, []);

  const {
    isFetching: isFetchingUpcoming,
    error: errorUpcoming,
    fetchedData: upcomingMovies,
  } = useFetch(fetchPopularMovies, []);

  console.log(popularMovies);

  //const apiUrl = `${url}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
  // const { upcomingMovies, isLoadingUpcoming, errorUpcoming } = useUpcoming(
  //   `${url}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
  // );
  // const { popularMovies, isLoading, error } = usePopular(
  //   `${url}/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  // );

  if (errorUpcoming || errorPopular) {
    return (
      <Error
        title="An error occurred!"
        message={errorUpcoming?.message || errorPopular?.message}
      />
    );
  }

  return (
    <>
      <h1 className="movie-list">Upcoming</h1>
      {isFetchingUpcoming ? (
        <span>Loading...</span>
      ) : (
        <MovieList movies={upcomingMovies} />
      )}
      <h1 className="movie-list">Popular</h1>
      {isFetchingPopular ? (
        <span>Loading...</span>
      ) : (
        <MovieList movies={popularMovies} />
      )}
    </>
  );
}

export default App;
