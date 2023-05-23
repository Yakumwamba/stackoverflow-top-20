// import { useSelector, useStore } from "zustand";
// import api from "./utils/api";



// const useUsers = () => {

// const usersStore = useStore(() => ({
//   users: [],
//   loading: false,
//   error: null,
// }));

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