import React from "react";
import { PaginationProps } from "../types/types";

import { FaArrowCircleRight, FaArrowCircleLeft } from  "react-icons/fa"
const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }: PaginationProps) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    const handleChangePage = (newPage: any) => {
      if (newPage >= 1 && newPage <= totalPages) {
        onPageChange(newPage);
      }
    };
  
    return (
      <div className="flex w-full sm:scale-25 px-10 items-center bottom-0 h-auto justify-between mt-10">
     
        <button className="follow-btn items-center border-[#3D1152] gap-2 flex flex-row px-4 py-2 bg-white border-2  text-[#3D1152] font-semibold rounded"
        
        onClick={() => handleChangePage(currentPage - 1)}
        disabled={currentPage === 1}
        >
            
            <FaArrowCircleLeft size={20} />
             Previous
             
            </button>
        <span className="sm:text-lg lg:text-xl font-bold ">
          {currentPage} of {totalPages}
        </span>
       
        <button className="follow-btn items-center border-[#3D1152] gap-2 flex flex-row px-4 py-2 bg-white border-2  text-[#3D1152] font-semibold rounded"
        
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