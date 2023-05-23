import React, { useEffect, useState } from "react";
import { getUsers } from "./utils/api";
import UserList from "./components/UserList";
import SearchInput from "./components/SearchInput";
import Pagination from "./components/pagination";
import useUsers from "./hooks/useUsers";
import {User } from "./utils/types"
// interface User {
//   name: string;
// }

interface UserListProps {
  users: User[];
}
// const filterUsers = (searchValue: User) => {
//   const users = [...users];

//   if (searchValue.length > 0) {
//     users = users.filter((user) => {
//       return user.name.toLowerCase().includes(searchValue.toLowerCase());
//     });
//   }

//   return users;
// };




const App = () => {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState("");
  const  users = useUsers();

  useEffect(() => {
    // if (searchValue) {
    //   // @ts-ignore
    //   const results = data.filter((item) =>
    //     item.name.toLowerCase().includes(searchValue.toLowerCase())
    //   );
    //   console.log(results)
    //   setFilteredData(results);
    // } else {
    //   // setFilteredData(data);
    // }

    console.log("Rendered on screen",  users)

  }, []);

  return (
    <div className="App">
      <h1>Stack Overflow Users</h1>
      {/* <SearchInput value={searchValue} onChange={setSearchValue} /> */}

      <UserList users={users.users} />
      {/* <Pagination page={page} totalPages={users.length} onPageChange={setPage} /> */}
    </div>
  );
};

export default App;