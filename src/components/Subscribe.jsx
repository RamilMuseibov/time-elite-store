import React from "react";

export default function Subscribe() {
  return (
    <section className="online-consultation-section">
      <div className="online-consultation-container">
        <h1 className="online-consultation-title">
          Готовы найти свои идеальные часы?
        </h1>
        <p className="online-consultation-sibtitle">
          Посетите наш шоу-рум или закажите онлайн-консультацию с экспертом
        </p>
        <div className="online-consultation-btn-container">
          <button className="showroom-btn">Посетить шоу-рум</button>
          <button className="online-consultation-btn">
            Онлайн-консультация
          </button>
        </div>
      </div>
    </section>
  );
}
