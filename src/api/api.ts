import { IData } from "../interfaces/IData";
const apiKey = import.meta.env.VITE_API_KEY;
const url = import.meta.env.VITE_API_URL;

export async function fetchPopularMovies(page: number) {
  const response = await fetch(
    `${url}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`,
    { method: "GET" }
  );
  const data: IData = await response.json();
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return data.results;
}

export async function fetchUpcomingMovies(page: number) {
  const response = await fetch(
    `${url}/movie/upcoming?api_key=${apiKey}&language=en-US&page=${page}`,
    { method: "GET" }
  );
  const data: IData = await response.json();
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return data.results;
}

export async function fetchMovieDetails(movieId: string | undefined) {
  const response = await fetch(
    `${url}/movie/${movieId}?api_key=${apiKey}&language=en-US&append_to_response=videos`,
    { method: "GET" }
  );
  const data = await response.json()
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return data;
}

export async function queryMovie(query: string) {
  const response = await fetch(
    `${url}/search/movie?api_key=${apiKey}&query=${query}`
  );
  const data = await response.json()
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return data.results;
}
