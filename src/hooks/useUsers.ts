import { useState, useEffect } from "react";
import { getUsers } from "../utils/api";
import {User} from "../utils/types"

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);


  
  useEffect(() => {
    getUsers().then((data) => {
      console.log("Data before after parse ", data)
      return setUsers(data);
    });
  }, []);

  return {
    users,
  };
};

export default useUsers;
