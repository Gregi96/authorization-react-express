import React, { useEffect, useState } from 'react';

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/home');
        const txt = await response.text();

        setMessage(txt);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <p>{message}</p>
    </div>
  );
};

export default Home;
