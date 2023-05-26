// Import required modules and components
import React, { useEffect, useState } from "react";
import UserList from "./components/UserList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MdWifiOff } from "react-icons/md";
import useInternetConnectivity from "./hooks/InternetConnectivity";
import { toast } from "react-toastify";
import useStoredUsers from "./hooks/useStoredUsers";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";


// Instantiate a new QueryClient
const queryClient = new QueryClient();

// App component
const App = () => {
  // State variables
  const [filteredData, setFilteredData] = useState();
  // const users = useUsers()
  const [users, setStoredUsers] = useStoredUsers();
  const { isOnline } = useInternetConnectivity();

  // Update the state when the online status changes
  useEffect(() => {
    if (isOnline) {
      console.log("App is online");
      toast("You are back online");
    } else {
      console.log("App is offline");
      toast("Check internet connection");
    }
  }, [isOnline]);

  // Render the App component
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col bg-white h-24 ">
        {isOnline ? (
          <div className="bg-black h-full">
            <NavBar />
            {/* @ts-ignore */}
            <UserList users={users} />
            <Footer />
          </div>
        ) : (
          <div className="flex flex-row bg-black h-screen self-center justify-center items-center gap-2 align-middle">
            <MdWifiOff color="white" size={25} className=" animate-pulse" />
            <p className="flex items-center text-white font-bold">
              You are offline
            </p>
          </div>
        )}
      </div>
    </QueryClientProvider>
  );
};

export default App;
