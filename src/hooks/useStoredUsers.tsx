import { useEffect, useState } from "react";
import { User } from "../types/types";

const useStoredUsers = (): [User[], (users: User[]) => void] => {
  const [users, setUsers] = useState<User[]>(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return [users, setUsers];
};

export default useStoredUsers;
