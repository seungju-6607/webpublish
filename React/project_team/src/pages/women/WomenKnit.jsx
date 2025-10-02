// src/pages/WomenKnit.jsx
import React from "react";
import "../Page.css";

function WomenKnit() {
  return (
    <div className="page">
      <h1>여성 니트 페이지</h1>
      <div className="product-grid">
        <div className="product-card">
          <img src="/images/여성/니트/women_knit1.webp" alt="니트 1" />
          <h3>클래식 울 가디건</h3>
          <p>₩89,000</p>
        </div>

        <div className="product-card">
          <img src="/images/여성/니트/women_knit2.webp" alt="니트 2" />
          <h3>그레이 울 가디건</h3>
          <p>₩79,000</p>
        </div>

        <div className="product-card">
          <img src="/images/여성/니트/women_knit3.webp" alt="니트 3" />
          <h3>핑크 라운드 니트</h3>
          <p>₩69,000</p>
        </div>

        <div className="product-card">
          <img src="/images/여성/니트/women_knit4.webp" alt="니트 4" />
          <h3>아가일 체크 니트</h3>
          <p>₩99,000</p>
        </div>

        <div className="product-card">
          <img src="/images/여성/니트/women_knit5.webp" alt="니트 5" />
          <h3>화이트 브이넥 니트</h3>
          <p>₩89,000</p>
        </div>

        <div className="product-card">
          <img src="/images/여성/니트/women_knit6.webp" alt="니트 6" />
          <h3>베이직 그레이 니트</h3>
          <p>₩59,000</p>
        </div>
      </div>
    </div>
  );
}

export default WomenKnit;
