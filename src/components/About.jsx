import React from "react";
import StarIcon from "../icons/StarIcon";
import ChevronRightIcon from "../icons/ChevronRightIcon";

export default function About() {
  return (
    <section className="advertising-section">
      <div className="advertising-content">
        <div className="advertising-text-content">
          <div className="advertising-text">
            <span className="premium-watches">Премиальные часы</span>
            <h1 className="slogan-text">
              Время — это <span className="highlighted-text">роскошь</span>,
              которую мы дарим
            </h1>
            <p className="description-text">
              Откройте для себя эксклюзивную коллекцию швейцарских часов от
              ведущих мировых брендов. Каждые часы — это произведение искусства.
            </p>
          </div>
          <div className="advertising-btn">
            <button className="catalog-btn">
              Смотреть каталог
              <div className="catalog-btn-image">
                <ChevronRightIcon />
              </div>
            </button>
            <button className="consultation-btn">
              Записаться на консультацию
            </button>
          </div>
          <div className="advertising-info">
            <div className="model-info">
              <p className="quantity">500+</p>
              <p className="model">Моделей</p>
            </div>
            <div className="brand-info">
              <p className="quantity">50+</p>
              <p className="model">Брендов</p>
            </div>
            <div className="years-info">
              <p className="quantity">15</p>
              <p className="model">Лет на рынке</p>
            </div>
          </div>
        </div>
        <div className="advertising-image-content">
          <div className="star-image-container">
            <div className="star-image">
              <StarIcon size="24" />
            </div>
          </div>
          <div className="watch-image-container">
            <img
              className="watch-image"
              src="https://v0-watch-store-landing-page.vercel.app/luxury-swiss-watch-on-elegant-display-stand.jpg"
              alt="Premium watchs"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
