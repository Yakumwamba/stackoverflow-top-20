// import { useSelector, useStore } from "zustand";
// import api from "../utils/api";



// const useUsers = () => {
//   const { users, loading, error } = useSelector(state => state.users);

//   const fetchUsers = async () => {
//     try {
//       const response = await api.getUsers();
//       usersStore.setState({
//         users: response.data,
//         loading: false,
//         error: null,
//       });
//     } catch (error) {
//       usersStore.setState({
//         users: [],
//         loading: false,
//         error,
//       });
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return {
//     users,
//     loading,
//     error,
//     fetchUsers,
//   };
// };

// it("should fetch the users from the API and update the state", async () => {
//   const { users, loading, error } = useUsers();

//   expect(users).toEqual([]);
//   expect(loading).toBe(true);
//   expect(error).toBeNull();

//   await api.getUsers();

//   expect(users).toHaveLength(20);
//   expect(loading).toBe(false);
//   expect(error).toBeNull();
// });
export {}