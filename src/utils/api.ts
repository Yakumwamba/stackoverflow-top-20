// utils/api.ts


export interface User {
  user_id: number;
  display_name: string;
  profile_image: string;
  reputation: number;
}

export interface ApiResponse {
  items: User[];
}

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(
    "https://api.stackexchange.com/2.2/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow"
  );

  if (response.status !== 200) {
    throw new Error("Failed to fetch users data");
  }
  

  const data = await response.json();
  console.log(data)
  const items: User[] = data.items.map((item: any) => ({
    user_id: item.user_id,
    display_name: item.display_name,
    profile_image: item.profile_image,
    reputation: item.reputation,
  }));
  console.log(items)

  return await items;
};


