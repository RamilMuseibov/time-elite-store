import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Rolex Submariner", price: "850 000 ₽" },
  { id: 2, name: "Omega Speedmaster", price: "420 000 ₽" },
  { id: 3, name: "Patek Philippe Calatrava", price: "1 200 000 ₽" },
];

export default function Products() {
    
  return (
    <section className="selected-models-section">
      <div className="selected-models-text-container">
        <h1 className="selected-models-title">Избранные модели</h1>
        <p className="selected-models-subtitle">
          Откройте для себя наши самые популярные и эксклюзивные часы
        </p>
      </div>
      <div className="selected-models-watch">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}
