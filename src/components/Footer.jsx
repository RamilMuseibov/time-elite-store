import React from "react";
import WatchIcon from "../icons/WatchIcon";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-main-info">
          <div className="logo-storname-container">
            <WatchIcon size="24" stroke="currentColor" />
            <span>TimeElite</span>
          </div>
          <p className="footer-discription">
            Премиальные швейцарские часы для истинных ценителей времени и стиля.
          </p>
        </div>
        <div className="footer-catalog">
          <h4 className="footer-catalog-title">Каталог</h4>
          <div className="footer-catalog-container">
            <a href="#" className="footer-catalog-link">
              Мужские часы
            </a>
            <a href="#" className="footer-catalog-link">
              Женские часы
            </a>
            <a href="#" className="footer-catalog-link">
              Спортивные часы
            </a>
            <a href="#" className="footer-catalog-link">
              Классические часы
            </a>
          </div>
        </div>
        <div className="footer-brands">
          <h4 className="footer-brands-title">Бренды</h4>
          <div className="footer-brands-container">
            <a href="#" className="footer-brands-link">
              Rolex
            </a>
            <a href="#" className="footer-brands-link">
              Omega
            </a>
            <a href="#" className="footer-brands-link">
              Patek Phillippe
            </a>
            <a href="#" className="footer-brands-link">
              Все бренды
            </a>
          </div>
        </div>
        <div className="footer-contacts">
          <h4 className="footer-contacts-title">Контакты</h4>
          <div className="footer-contacts-container">
            <p className="footer-contacts-number">+7 (495) 123-45-67</p>
            <p className="footer-contacts-email">info@timeelite.ru</p>
            <p className="footer-contacts-address">Москва, ул. Тверская, 15</p>
            <p className="footer-contacts-working">Пн-Вс: 10:00-21:00</p>
          </div>
        </div>
      </div>
      <div className="footer-all-rights">
        <p className="all-rights">© 2025 TimeElite. Все права защищены.</p>
      </div>
    </footer>
  );
}
