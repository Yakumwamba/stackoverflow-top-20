import React from "react";
import {User} from "../utils/types"


interface UserListProps {
  users: User[];

}

const UserList = ({users}: UserListProps) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.user_id}>
           <img src={`${user.profile_image}`} width={100} height={100} alt=""/>
           <p> {user.reputation}</p>
           
          {user.display_name}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
