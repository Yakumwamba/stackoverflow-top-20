/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from "react";
import {User} from "../utils/types"

import { getUsers } from "../utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useQuery } from "@tanstack/react-query";


interface UserListProps {
  users: User[];

}

const UserList = ({users}: UserListProps) => {
    const queryClient = useQueryClient()

    // queries
  

     // Mutations
//   const mutation = useMutation({
//     mutationFn: postTodo,
//     onSuccess: () => {
//       // Invalidate and refetch
//       queryClient.invalidateQueries({ queryKey: ['todos'] })
//     },
//   })

const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
    getUsers()
  });

  useEffect( () => {

    console.log("This is a list of users", users)
  },  [queryClient])

  if (isLoading) {
   return (<p>Data loading</p>);
  }
  if (isFetching) {
(<p>Data fetching</p> )
  }
  if (error) {
  (<p>Error loading data </p>)
  }

  const  onClickUser =  (id: any) => {
console.log("Clicked", id )
  }
  return (
    <>  
<div className="flex flex-col bg-gray-400 w-full h-auto">

{data?.map((user) => (
    
    <div key={user.user_id} className="flex flex-row justify-between w-full" onClick={onClickUser}>
        <div className={"flex bg-black bg-[url] rounded-full w-auto h-auto "}>
            <img src={user.profile_image} alt="" className="flex rounded-full" width={100} height={100} />
        </div>
        <p className="text-lg">{ user.display_name}</p>
        <p> { user.reputation}</p>
    <hr className="h-0.5 bg-black w-full" />
    </div>

  ))}
</div>

  
    </>
    
  );
};

export default UserList;
