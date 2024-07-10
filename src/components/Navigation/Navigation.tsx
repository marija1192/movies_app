import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

export default function Navigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/popular"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Popular
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/top-rated"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Top rated
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Search Movie
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
