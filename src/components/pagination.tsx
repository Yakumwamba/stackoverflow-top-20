import React from "react";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ page, totalPages, onPageChange }: PaginationProps) => {
  const pages = Array(totalPages).fill(null);

  pages[page - 1] = true;

  return (
    <div>
      {pages.map((page, index) => (
        <button
          key={index}
          disabled={page === null}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;