import MovieList from "../components/MovieList/MovieList";
import Error from "../components/Error";
import { useFetch } from "../hooks/useFetch";
import { fetchUpcomingMovies } from "../api/api";
import { useState } from "react";
import Pagination from "../components/Pagination/Pagination";

function UpcomingMovies() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // for example

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Implement logic to fetch data for the new page, e.g., API call
    }
  };

  console.log(currentPage)

  const {
    isFetching,
    error,
    fetchedData: upcomingMovies,
  } = useFetch(fetchUpcomingMovies, [], currentPage);

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
        <MovieList movies={upcomingMovies} />
      )}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </>
  );
}
export default UpcomingMovies;
