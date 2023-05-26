

// Import required modules and components
import  { useEffect } from "react";
import UserList from "./components/UserList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MdWifiOff } from "react-icons/md";
import useInternetConnectivity from "./hooks/InternetConnectivity";

import useStoredUsers from "./hooks/useStoredUsers";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import useUsers from "./hooks/useUsers";


// Instantiate a new QueryClient
const queryClient = new QueryClient();

// App component
const App = () => {
  // State variables

  
   const users = useUsers()
   const [cachedUsers] = useStoredUsers();
    const { isOnline } = useInternetConnectivity();

  // Update the state when the online status changes
  useEffect(() => {
    console.log("Internet connectivity", isOnline)
    console.log("These are the cached users",cachedUsers)
  }, [isOnline, cachedUsers]);

  // Render the App component
  return (
    <QueryClientProvider client={queryClient}>



      <div className="flex flex-col bg-white h-screen ">
        {isOnline ? (
          <div className="bg-black h-full">
            <NavBar />
            {/* @ts-ignore */}
            { cachedUsers ?  <UserList users={cachedUsers} /> :  <UserList users={users.users} />}
           
            <Footer />
          </div>
        ) : (
          <div className="flex flex-row bg-black h-screen self-center justify-center items-center w-full gap-2 align-middle">
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
