import MovieList from "../components/MovieList/MovieList";
import Error from "../components/Error";
import { useFetch } from "../hooks/useFetch";
import { fetchTopRatedMovies } from "../api/api";
import { useState } from "react";
import Pagination from "../components/Pagination/Pagination";

function TopRatedMovies() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // for example

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const {
    isFetching,
    error,
    fetchedData: topRatedMovies,
  } = useFetch(fetchTopRatedMovies, [], currentPage);

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
        <MovieList movies={topRatedMovies} />
      )}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </>
  );
}
export default TopRatedMovies;
