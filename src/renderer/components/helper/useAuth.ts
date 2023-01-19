import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [isLogging, setIsLogging] = useState(false);
  const [checkStatus, setCheckingStatus] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    (async()=>{
      try {
        
      } catch (error) {
        
      }
    })()
  }, []);

  return;
};

export default useAuth;
