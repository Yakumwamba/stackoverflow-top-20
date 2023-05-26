import { useState, useEffect } from "react";
import { getUsers } from "../api/api";
import { User } from "../types/types"

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then((data) => {
      
      setUsers(data)
      // return setUsers(data);
    });
  }, []);

  return {
    users,
  };
};

export default useUsers;
