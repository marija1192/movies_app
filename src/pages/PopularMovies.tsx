
import Error from "../components/Error";
import { useFetch } from "../hooks/useFetch";
import { fetchPopularMovies } from "../api/api";
import MovieList from "../components/MovieList/MovieList";
import Pagination from "../components/Pagination/Pagination";
import { useState } from "react";

function PopularMovies() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const {
    isFetching,
    error,
    fetchedData: popularMovies,
  } = useFetch(fetchPopularMovies, [], currentPage);

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
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </>
  );
}
export default PopularMovies;
