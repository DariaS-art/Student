import React from 'react';
import logo from './logo.png'; // Убедитесь, что путь соответствует расположению файла

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="logo" />
      <nav className="header-menu">
        <a href="#акции">Акции</a>
        <a href="#меню">Меню</a>
        <a href="#адреса">Адреса</a>
        <a href="#контакты">Контакты</a>
      </nav>
    </header>
  );
}

export default Header;