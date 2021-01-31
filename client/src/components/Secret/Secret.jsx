import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import useWithAuth from '../Hooks/useWithAuth';

const Secret = () => {
  const { loading, redirect } = useWithAuth('/checkToken');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/secret')
      .then((res) => res.text())
      .then((res) => setMessage(res))
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <p>{'Loading...'}</p>;
  }

  if (redirect) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h1>Secret</h1>
      <p>{message}</p>
    </div>
  );
};

export default Secret;
