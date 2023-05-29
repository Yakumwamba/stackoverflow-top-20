// Import required modules and components

import UserList from "./components/UserList";
import { useQuery } from "@tanstack/react-query";
import { MdWifiOff } from "react-icons/md";
import { FaSpinner, FaSave } from "react-icons/fa";
import useInternetConnectivity from "./hooks/InternetConnectivity";

import useStoredUsers from "./hooks/useStoredUsers";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { getUsers } from "./api/api";
import { useEffect, useState } from "react";
import { User } from "./types/types";


// App component
const App = () => {
  // State variables

  const [cachedUsers] = useStoredUsers();
  const { isOnline } = useInternetConnectivity();
  const [users, setUsers] = useState<User[]>([]);


   useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);


  if (users.length === 0) {
    return (
      <div className="flex flex-row bg-black h-screen self-center justify-center items-center w-full gap-2 align-middle">
        <FaSpinner color="white" size={25} className=" animate-spin" />
        <p className="flex items-center text-white font-bold">
          Loading users...
        </p>
      </div>
    );
  }



  const loadCache = () => {
    console.log("Loading from cache", cachedUsers);
  };
  const OfflineComponent = () => (
    <div className="flex flex-row bg-black h-screen self-center justify-center items-center w-full gap-2 align-middle">
      <MdWifiOff color="white" size={25} className=" animate-pulse" />
      <p className="flex items-center text-white font-bold">You are offline</p>
      <button
        className={`text-white ${
          cachedUsers.length !== 0 ? "" : "hidden"
        } flex flex-row gap-2 items-center font-bold text-sm bg-primary p-3 `}
        onClick={loadCache}
      >
        <FaSave size={25} color="white" /> Load Cache
      </button>
    </div>
  );
  // Render the App component
  return (
    <div className="flex flex-col bg-white h-screen ">
   {(
      users?.length !== 0 ? (
        <div className="bg-black h-full">
          <NavBar />
          <UserList users={users} />
          <Footer />

        </div>
      ) : (
        cachedUsers.length !== 0 ? (
          <div className="bg-black h-full">
            <NavBar />
            <UserList users={cachedUsers} />
            <Footer />
            <div className="flex fixed bottom-0 right-0 w-auto h-auto bg-gray-500">
              <p className=" p-5 text-white text-lg font-medium">
                Using cached data
              </p>
            </div>
          </div>
        ) : (
          <OfflineComponent />
        )
      )
    ) }

    
  </div> );
};


export default App;
