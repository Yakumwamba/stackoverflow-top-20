import { useState, useEffect } from "react";

const useInternetConnectivity = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const checkConnectivity = async () => {
      const response = await fetch("https://www.google.com");

      setIsConnected(response.status === 200);
    };

    checkConnectivity();
  }, []);

  return {
    isConnected,
  };
};

export default useInternetConnectivity;

export {}