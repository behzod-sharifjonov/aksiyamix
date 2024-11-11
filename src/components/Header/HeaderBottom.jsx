import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

function HeaderMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Категории', path: '/categories' },
    { name: 'Лучшие объявления', path: '/best-ads' },
    { name: 'Объявления о начале скидки', path: '/discounts-start' },
    { name: 'для тебя', path: '/' },
    { name: 'Скидки рядом', path: '/discounts-nearby' },
    { name: 'Последние просмотренные объявления', path: '/recent-ads' },
    { name: 'Остановленные объявления', path: '/paused-ads' },
  ];

  const handleItemClick = (path) => {
    navigate(path);
  };

  return (
    <ul className='header-bottom-menu'>
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={location.pathname === item.path ? 'active' : ''}
          onClick={() => handleItemClick(item.path)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default HeaderMenu;
