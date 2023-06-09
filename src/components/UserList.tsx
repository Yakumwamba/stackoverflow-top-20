/* Import required modules and components */
import { useCallback, useEffect, useState } from "react";
import { User } from "../types/types";
import Pagination from "./pagination";
import UserCard from "./UserCard";
import { ToastContainer } from "react-toastify";
import SearchInput from "./SearchInput";

// Define UserList component
interface UserProps {
  users: User[];
}
const UserList = ({ users }: UserProps) => {
  // State variables
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<User[]>([]);

  // Search users by the searchTerm - Now using useCallback
  const searchUsers = useCallback(
    (searchTerm: string): User[] =>
      users.filter((user: User) =>
        user.display_name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [users]
  );

  // Update searchResults state when searchTerm or searchUsers function changes
  useEffect(() => {
    setSearchResults(searchUsers(searchTerm));
  }, [searchTerm, searchUsers]);

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
    <div className={`flex flex-col lg:px-20 bg-black w-full pb-5`}>
      <SearchInput value={searchTerm} onChange={handleSearchChange} />
      {/* Render noResults message if there are no search results */}
      {searchResults.length === 0 && searchTerm !== "" ? (
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
        totalItems={searchResults.length} // Updated to use the length of searchResults
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
