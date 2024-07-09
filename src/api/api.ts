import { IData } from "../interfaces/IData";
const apiKey = import.meta.env.VITE_API_KEY;
const url = import.meta.env.VITE_API_URL;

export async function fetchPopularMovies() {
  const response = await fetch(
    `${url}/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    { method: "GET" }
  );
  const data: IData = await response.json();
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return data.results;
}

export async function fetchUpcomingMovies() {
  const response = await fetch(
    `${url}/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
    { method: "GET" }
  );
  const data: IData = await response.json();
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return data.results;
}
