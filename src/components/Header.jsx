import React from "react";
import WatchIcon from "../icons/WatchIcon";

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="storename-container">
          <WatchIcon size="30" stroke="currentColor" />
          <span>TimeElite</span>
        </div>
        <nav className="nav-container">
          <a href="#" className="nav-container-link">
            Каталог
          </a>
          <a href="#" className="nav-container-link">
            Бренды
          </a>
          <a href="#" className="nav-container-link">
            О нас
          </a>
          <a href="#" className="nav-container-link">
            Контакты
          </a>
        </nav>
        <button className="btn-login">Войти</button>
      </div>
    </header>
  );
}
