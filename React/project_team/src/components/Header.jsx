// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);

  return (
    <header className="header">
      <div className="header-top">
        <h1 className="logo">
          <Link to="/">SSF 10th</Link>
        </h1>
        <div className="header-icons">
          <span className="icon">🔍</span>
          <span className="icon">♡</span>
          <span className="icon">🛒</span>
        </div>
      </div>

      <nav className="header-nav">
        <ul>
          <li
            onMouseEnter={() => handleMouseEnter("women")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/women">여성</Link>
            {activeMenu === "women" && (
              <div className="dropdown">
                <Link to="/women/new">신상품</Link>
                <Link to="/women/outer">아우터</Link>
                <Link to="/women/jacket">재킷/베스트</Link>
                <Link to="/women/knit">니트</Link>
                <Link to="/women/shirt">셔츠/블라우스</Link>
                <Link to="/women/tshirt">티셔츠</Link>
                <Link to="/women/onepiece">원피스</Link>
                <Link to="/women/pants">팬츠</Link>
                <Link to="/women/skirt">스커트</Link>
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => handleMouseEnter("men")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/men">남성</Link>
            {activeMenu === "men" && (
              <div className="dropdown">
                <Link to="/men/new">신상품</Link>
                <Link to="/men/suit">정장</Link>
                <Link to="/men/pants">팬츠</Link>
                <Link to="/men/jacket">재킷/베스트</Link>
                <Link to="/men/shirt">셔츠</Link>
                <Link to="/men/knit">니트</Link>
                <Link to="/men/tshirt">티셔츠</Link>
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => handleMouseEnter("kids")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/kids">키즈</Link>
            {activeMenu === "kids" && (
              <div className="dropdown">
                <Link to="/kids/new">신상품</Link>
                <Link to="/kids/boy">남아</Link>
                <Link to="/kids/girl">여아</Link>
                <Link to="/kids/baby">베이비</Link>
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => handleMouseEnter("luxury")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/luxury">럭셔리</Link>
            {activeMenu === "luxury" && (
              <div className="dropdown">
                <Link to="/luxury/new">신상품</Link>
                <Link to="/luxury/women">여성</Link>
                <Link to="/luxury/men">남성</Link>
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => handleMouseEnter("shoes")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/shoes">백&슈즈</Link>
            {activeMenu === "shoes" && (
              <div className="dropdown">
                <Link to="/shoes/new">신상품</Link>
                <Link to="/shoes/women">여성</Link>
                <Link to="/shoes/men">남성</Link>
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => handleMouseEnter("sports")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/sports">스포츠</Link>
            {activeMenu === "sports" && (
              <div className="dropdown">
                <Link to="/sports/new">신상품</Link>
                <Link to="/sports/outdoor">아웃도어/캠핑</Link>
                <Link to="/sports/running">러닝/사이클</Link>
                <Link to="/sports/yoga">요가/필라테스</Link>
                <Link to="/sports/fitness">피트니스</Link>
                <Link to="/sports/tennis">테니스</Link>
                <Link to="/sports/swim">수영</Link>
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => handleMouseEnter("golf")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/golf">골프</Link>
            {activeMenu === "golf" && (
              <div className="dropdown">
                <Link to="/golf/new">신상품</Link>
                <Link to="/golf/women">여성</Link>
                <Link to="/golf/men">남성</Link>
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => handleMouseEnter("beauty")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/beauty">뷰티</Link>
            {activeMenu === "beauty" && (
              <div className="dropdown">
                <Link to="/beauty/new">신상품</Link>
                <Link to="/beauty/skin">스킨케어</Link>
                <Link to="/beauty/makeup">메이크업</Link>
                <Link to="/beauty/perfume">향수</Link>
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => handleMouseEnter("life")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/life">라이프</Link>
            {activeMenu === "life" && (
              <div className="dropdown">
                <Link to="/life/new">신상품</Link>
                <Link to="/life/furniture">가구</Link>
                <Link to="/life/pet">반려동물</Link>
                <Link to="/life/car">자동차용품</Link>
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => handleMouseEnter("outlet")}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/outlet">아울렛</Link>
            {activeMenu === "outlet" && (
              <div className="dropdown">
                <Link to="/outlet/women">여성</Link>
                <Link to="/outlet/men">남성</Link>
                <Link to="/outlet/kids">키즈</Link>
                <Link to="/outlet/luxury">럭셔리</Link>
                <Link to="/outlet/shoes">백&슈즈</Link>
                <Link to="/outlet/sports">스포츠</Link>
                <Link to="/outlet/golf">골프</Link>
                <Link to="/outlet/life">라이프</Link>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
