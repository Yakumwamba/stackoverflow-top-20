import React from "react";
import { PaginationProps } from "../utils/types";


const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }: PaginationProps) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    const handleChangePage = (newPage: any) => {
      if (newPage >= 1 && newPage <= totalPages) {
        onPageChange(newPage);
      }
    };
  
    return (
      <div className="flex items-center justify-center mt-4">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded ml-2"
          onClick={() => handleChangePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  };
  
export default Pagination;