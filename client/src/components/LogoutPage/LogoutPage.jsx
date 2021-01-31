import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './LogoutPage.scss';

const LogoutPage = () => {
  let history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (e.target.value === 'TAK') {
      const response = await fetch('/api/logout', {
        method: 'POST',
      });

      if (response.status === 200) {
        history.push('/');
      }
    } else {
      history.push('/');
    }
  };

  return (
    <section className="logout">
      <p className="logout__title">Czy na pewno chcesz się wylogować ?</p>

      <button onClick={onSubmit} value="TAK" className="logout__button">
        Tak
      </button>

      <button onClick={onSubmit} value="NIE" className="logout__button">
        Nie
      </button>
    </section>
  );
};

export default LogoutPage;
