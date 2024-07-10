import { useState } from "react";
import MovieList from "../MovieList/MovieList";
import { useFetch } from "../../hooks/useFetch";
import { queryMovie } from "../../api/api";
import Error from "../Error";
import classes from './Search.module.css'

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    isFetching,
    fetchedData: movies,
    error,
  } = useFetch(
    queryMovie,
    [],
    searchQuery.trim() !== "" ? searchQuery : undefined
  );

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const query = e.target.value;
    setSearchQuery(query);
  }

  return (
    <div>
      <form action="" className={classes.search_form}>
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          value={searchQuery}
          className={classes.search_input}
        />
      </form>
      
      {error && <Error title={error.title} message={error.message} />}
      {isFetching && <p>Loading...</p>}
      {searchQuery ? <MovieList movies={movies} /> : <p>Search here for movies</p>}
    </div>
  );
}
