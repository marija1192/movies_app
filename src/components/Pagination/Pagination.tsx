import { IPagination } from "../../interfaces/IPagination";
import classes from "./Pagination.module.css";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: IPagination) {
  const pagesToShow = 5; // Number of pages to show in the pagination

  // Calculate the range of pages to display
  const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  // Generate an array of page numbers to display
  const pages = Array.from(
    Array(endPage - startPage + 1),
    (_, index) => startPage + index
  );

  return (
    <nav aria-label="Page navigation" className={classes.page_pagination_container}>
      <ul className={classes.page_pagination}>
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? "active" : ""}`}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
