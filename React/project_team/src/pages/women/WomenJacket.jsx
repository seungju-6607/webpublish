// src/pages/women/WomenJacket.jsx
import React from "react";
import "../Page.css";   // ✅ 올바른 경로 (pages 안에 Page.css 있음)

function WomenJacket() {
  const products = [
    {
      id: 1,
      name: "베이지 클래식 재킷",
      price: "₩129,000",
      image: "/images/여성/재킷/women_jacket1.webp",
    },
    {
      id: 2,
      name: "하이넥 니트 자켓",
      price: "₩119,000",
      image: "/images/여성/재킷/women_jacket2.webp",
    },
    {
      id: 3,
      name: "패턴 루즈핏 재킷",
      price: "₩139,000",
      image: "/images/여성/재킷/women_jacket3.webp",
    },
    {
      id: 4,
      name: "라이트 패딩 재킷",
      price: "₩159,000",
      image: "/images/여성/재킷/women_jacket4.webp",
    },
    {
      id: 5,
      name: "빈티지 오버핏 재킷",
      price: "₩149,000",
      image: "/images/여성/재킷/women_jacket5.webp",
    },
    {
      id: 6,
      name: "블랙 미니멀 재킷",
      price: "₩169,000",
      image: "/images/여성/재킷/women_jacket6.webp",
    },
  ];

  return (
    <div className="page-container">
      <h2 className="page-title">여성 재킷 페이지</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WomenJacket;
