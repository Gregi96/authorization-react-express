import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginPage.scss';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let history = useHistory();

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { email, password };

    fetch('/api/authenticate', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status === 200) {
          history.push('/');
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        alert('Error logging in pleace try again');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h1 className="login-form__title">Login Below!</h1>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={handleInputChange}
        name="email"
        required
        className="login-form__input"
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        name="password"
        onChange={handleInputChange}
        className="login-form__input"
      />
      <input type="submit" value="Submit" className="login-form__submit" />
    </form>
  );
};

export default LoginPage;
