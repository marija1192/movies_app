import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Homepage";
import PopularMovies from "./pages/PopularMovies";
import RootLayout from "./pages/RootLayout";
import UpcomingMovies from "./pages/UpcomingMovies";
import ErrorPage from "./pages/ErrorPage";
import MoviePage from "./pages/MoviePage";
import Search from "./components/Search/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/popular", element: <PopularMovies /> },
      { path: "/upcoming", element: <UpcomingMovies /> },
      { path: "/movie/:movieId", element: <MoviePage /> },
      {path: "/search", element: <Search />}
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
