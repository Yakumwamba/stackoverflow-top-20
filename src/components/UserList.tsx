/* eslint-disable react-hooks/exhaustive-deps */

/* Import required modules and components */
import { useEffect, useState } from "react";
import { User } from "../types/types";
import Pagination from "./pagination";
import UserCard from "./UserCard";
import { FaSpinner } from "react-icons/fa";
import { ToastContainer, } from "react-toastify";
import SearchInput from "./SearchInput";

// Define UserList component

// @ts-ignore
const UserList = ({ users }: any[]) => {
  // State variables
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [noResults, setNoResults] = useState(false);
  // Use the useQuery hook to fetch users

  // Search users by the searchTerm
  const searchUsers = (searchTerm: string): User[] =>
    users.filter((user: User) =>
      user.display_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Update searchResults state when searchTerm or searchUsers function changes
  useEffect(() => {
     setSearchResults(searchUsers(searchTerm));
    console.log("Here checking..")
  }, [searchTerm]);

  // // Set noResults state when searchResults array is empty
  useEffect(() => { 
    setNoResults(searchResults.length === 0);
  
  }, [searchUsers]);

  // Render loading indicator if data is being fetched
  if (!users) {
    return (
      <div className="flex flex-row self-center h-auto flex-grow justify-center items-center gap-2 align-middle">
        <FaSpinner color="white" size={25} className="animate-spin" />
        <p className="flex items-center text-white font-bold">Fetching users...</p>
      </div>
    );
  }

  // Render an error message if there's an error
  // if (error) {
  //   toast("Error fetching data...");
  // }

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle page changes in pagination
  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage);
  };

  // Calculate paginatedData based on the currentPage
  const paginatedData = searchResults.slice(
    (currentPage - 1) * 8,
    currentPage * 8
  );

  // Render the UserList component
  return (
    <div
      className={`flex flex-col lg:px-20 bg-black w-full pb-5`}
    >
      <SearchInput value={searchTerm} onChange={handleSearchChange} />
      {/* Render noResults message if there are no search results */}
      {noResults ? (
        <div className="flex flex-col self-center">
          <p className="text-white text-xl font-bold">
            "{searchTerm}" User not found.
          </p>
        </div>
      ) : (
        paginatedData.map((user: User) => (
          <UserCard key={user.user_id} user={user} />
        ))
      )}
      {/* Render Pagination component */}
      <Pagination
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={8}
        onPageChange={handlePageChange}
      />  
      {/* Render Toast component for displaying notifications */}
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default UserList;


