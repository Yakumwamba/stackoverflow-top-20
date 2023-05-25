/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from "react";
import {User} from "../utils/types"

import { getUsers } from "../utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useQuery } from "@tanstack/react-query";
import Pagination from "./pagination";
import UserCard from "./UserCard";

import { FaSpinner  } from "react-icons/fa"

interface UserListProps {
  users: User[];

}

const UserList = ({users}: UserListProps) => {
    const queryClient = useQueryClient()
 const [currentPage, setCurrentPage] = useState(1);
const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
    getUsers()
  });

  useEffect( () => {

    console.log("This is a list of users", users)
  },  [queryClient])

  if (isLoading) {
   return (
   
    <div className="flex flex-row self-center justify-center items-center gap-2 align-middle">
   <FaSpinner color="white" size={25}  className=" animate-spin"/>

<p className="flex  items-center  text-white font-bold">Data loading</p>;
</div>)
  }
  if (isFetching) {
(
    <div className="">
        <FaSpinner size={50} />
<p className="text-white font-bold">Data fetching</p> 
    </div>

 )
  }
  if (error) {
  (<p>Error loading data </p>)
  }




  const handlePageChange = (newPage:any) => {
    setCurrentPage(newPage);
  };

  const paginatedData = users.slice((currentPage - 1) * 8, currentPage * 8);

  return (
    
    <div className="flex flex-col bg-white w-full  h-auto">
    {paginatedData.map((user) => (
      <UserCard key={user.user_id} user={user} />
    ))}
    <Pagination
      currentPage={currentPage}
      totalItems={users.length}
      itemsPerPage={8}
      onPageChange={handlePageChange}
    />
  </div>
  );
};

export default UserList;
