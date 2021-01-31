import React, { useEffect, useState } from 'react';

const useWithAuth = (checkEndPoint) => {
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(checkEndPoint);

        if ((await response.status) === 200) {
          setLoading(false);
        } else {
          throw new Error('Bład 401');
        }
      } catch (error) {
        setLoading(false);
        setRedirect(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return {
    loading,
    redirect,
  };
};

export default useWithAuth;
