import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  const List = [
    { name: 'Home', path: '/', exact: true },
    { name: 'Secret', path: '/secret' },
    { name: 'Login', path: '/login' },
    { name: 'Logout', path: '/logout' },
  ];

  const menu = List.map((item) => (
    <li key={item.name} className="navigation__try">
      <Link
        to={item.path}
        exact={item.exact ? item.exact : false}
        className="navigation__item"
      >
        {item.name}
      </Link>
    </li>
  ));

  return (
    <nav className="navigation">
      <ul className="navigation__list">{menu}</ul>
    </nav>
  );
};

export default Navigation;
