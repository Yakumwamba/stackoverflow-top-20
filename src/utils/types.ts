export interface User {
    user_id: number;
    display_name: string;
    profile_image: string;
    reputation: number;
  }
  

export interface PaginationProps {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (newPage: number) => void;
  };