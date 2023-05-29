import React from "react";
import { PaginationProps } from "../types/types";

import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

// Pagination component

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) => {

   // Calculate the total number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);


   // Handle page change
  const handleChangePage = (newPage: any) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };


   // Render the Pagination component
  return (
    <div className="flex w-full sm:scale-25 lg:px-32 sm:px-16 md:px-24 xl:px-40 items-center bottom-0 h-auto justify-between mt-10">
      <button
        className="items-center border-[#3D1152] gap-2 flex flex-row px-4 py-2 bg-white border-2  text-[#3D1152] font-semibold rounded"
        onClick={() => handleChangePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaArrowCircleLeft size={20} />
        Previous
      </button>
      <span className="sm:text-sm text-white lg:text-xl font-bold ">
        {currentPage} of {totalPages}
      </span>

      <button
        className="items-center border-[#3D1152] gap-2 flex flex-row px-4 py-2 bg-white border-2  text-[#3D1152] font-semibold rounded"
        onClick={() => handleChangePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
        <FaArrowCircleRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
