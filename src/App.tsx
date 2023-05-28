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


// App component
const App = () => {
  // State variables

  const [cachedUsers] = useStoredUsers();
  const { isOnline } = useInternetConnectivity();

  // const query = useQuery({ queryKey: ['todos'], queryFn: getUsers })
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading && isOnline) {
    return (
      <div className="flex flex-row bg-black h-screen self-center justify-center items-center w-full gap-2 align-middle">
        <FaSpinner color="white" size={25} className=" animate-spin" />
        <p className="flex items-center text-white font-bold">
          Loading users...
        </p>
      </div>
    );
  }

  if (isError as any) {
    //@ts-ignore
    return <span>Error: {error.message}</span>;
  }

  if( data ) {
    console.log(data)
  }

  if (error) {
    console.log("There was an error");
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
      data?.length !== 0 ? (
        <div className="bg-black h-full">
          <NavBar />
          <UserList users={data || []} />
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
