import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Homepage";
import PopularMovies from "./pages/PopularMovies";
import RootLayout from "./pages/RootLayout";
import UpcomingMovies from "./pages/UpcomingMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/popular", element: <PopularMovies /> },
      {path: "/upcoming", element: <UpcomingMovies />}
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
