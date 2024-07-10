import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import { fetchMovieDetails } from "../api/api";
import { useFetch } from "../hooks/useFetch";
import Error from "../components/Error";

export default function MoviePage() {
  const { movieId } = useParams();

  const {
    isFetching,
    error,
    fetchedData: movieDetails,
  } = useFetch(fetchMovieDetails, {}, movieId);

  if (error) {
    return <Error title={error.title} message={error.message} />;
  }

  return (
    <>
      {isFetching ? (
        <span>Loading...</span>
      ) : (
        <MovieDetails movie={movieDetails} />
      )}
    </>
  );
}
