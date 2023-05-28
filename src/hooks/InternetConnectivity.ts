import { useState, useEffect } from "react";

const useInternetConnectivity = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const setOffline = () => {
    console.log("Offline event triggered");
    setIsOnline(false);
  };

  const setOnline = () => {
    console.log("Online event triggered");
    setIsOnline(true);
  };

  useEffect(() => {
    console.log("Initial isOnline value:", isOnline);

    window.addEventListener("offline", setOffline);
    window.addEventListener("online", setOnline);

    return () => {
      window.removeEventListener("offline", setOffline);
      window.removeEventListener("online", setOnline);
    };
  }, [isOnline]);

  return { isOnline };
};

export default useInternetConnectivity;
