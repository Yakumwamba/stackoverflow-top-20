import React, { useEffect, useState } from "react";
import { getUsers } from "./utils/api";
import UserList from "./components/UserList";
import SearchInput from "./components/SearchInput";
import Pagination from "./components/pagination";
import useUsers from "./hooks/useUsers";
import {User } from "./utils/types"


import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// interface User {
//   name: string;
// }
const queryClient = new QueryClient();

interface UserListProps {
  users: User[];
}





const App = () => {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState("");
  const  users = useUsers();

  const userLocal = [  { user_id: 1, display_name: "Alice", profile_image: "", reputation: 100 },
  { user_id: 2, display_name: "Bob", profile_image: "", reputation: 200 },
  { user_id: 3, display_name: "Charlie", profile_image: "", reputation: 300 },]


  useEffect(() => {
    if (searchValue) {
      const usersCopy = Object.assign([], users.users);
      const results = usersCopy.filter((item) =>
      // @ts-ignore
        item.display_name.toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log(results)
      // @ts-ignore
      setFilteredData(results);
    } else {
      // setFilteredData(data);
    }

 
    console.log("Rendered on screen",  users)
    console.log(searchValue)

  }, [searchValue, users, queryClient]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  
  return (

    <QueryClientProvider client={queryClient}>
    <div className="flex flex-col bg-black">
      <h1>Stack Overflow Users</h1>
      <SearchInput value={searchValue} onChange={handleChange} /> 

      <UserList users={users.users} />
      {/* <Pagination page={page} totalPages={users.length} onPageChange={setPage} /> */}
    </div>
    </QueryClientProvider>
  );
};

export default App;