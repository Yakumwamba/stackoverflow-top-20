import { useState, useEffect } from "react";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const useInternetConnectivity = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    useEffect(() => {
        // Update network status
        const handleStatusChange = () => {

            if(isOnline) {
                toast("You are offline")
                console.log("You are offline")
            }else {
                toast("You are back online ")
             }
         
          setIsOnline(navigator.onLine);
        };
    
        // Listen to the online status
        window.addEventListener('online', handleStatusChange);
    
        // Listen to the offline status
        window.addEventListener('offline', handleStatusChange);
    
        // Specify how to clean up after this effect for performance improvment
        return () => {
          window.removeEventListener('online', handleStatusChange);
          window.removeEventListener('offline', handleStatusChange);
        };
      }, [isOnline]);

  return {
    isOnline,
  };
};

export default useInternetConnectivity;

export {}