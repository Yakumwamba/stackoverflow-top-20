// utils/api.ts

import { User } from "../types/types";




export interface ApiResponse {
  items: User[];
}
// Caching Strategy

// I first check if the users object exists in localStorage using localStorage.getItem("users") 
// and store the result in the storedUsers variable. 
// If storedUsers is not null, I parse the stored string 
// back to an array of User[] and return it. If storedUsers is null, 
// the data is fetched from the API and stored in localStorage before 
//returning the users 


export const getUsers = async (): Promise<User[]> => {
  const proxyUrl = "https://my-cors-proxy.herokuapp.com/";
  const apiUrl = "http://api.stackexchange.com/2.2/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow";
  // Check if the users array exists in localStorage
   const storedUsers = localStorage.getItem("users");
  if (storedUsers !== null) {
    // If users are found in localStorage, return the stored users
    const items: User[] = JSON.parse(storedUsers);
    return items;
  }

  // If users are not found in localStorage, fetch the data from the API
  const response = await fetch(
    apiUrl
  );

  if (response.status !== 200) {
    throw new Error("Failed to fetch users data");
  }

  const data = await response.json();
  console.log("List of users => ", data);
  const items: User[] = data.items.map((item: any) => ({
    user_id: item.user_id,
    display_name: item.display_name,
    profile_image: item.profile_image,
    reputation: item.reputation,

  }));
  localStorage.setItem("users", JSON.stringify(items));
  return await items;
};


