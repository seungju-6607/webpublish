import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext.jsx";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState("XS");
  const [activeTab, setActiveTab] = useState("detail");
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get("/data/products.json")
      .then((res) => {
        const found = res.data.find((p) => p.pid === id);
        setProduct(found);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p>상품을 불러오는 중...</p>;

  return (
    <div className="product-detail">
      <div className="detail-top">
        <div className="detail-left">
          <img className="main-img" src={product.image} alt={product.name} />
          <div className="thumbnail-list">
            {product.imgList.map((img, idx) => (
              <img key={idx} src={img} alt={`thumb-${idx}`} />
            ))}
          </div>
        </div>
        <div className="detail-right">
          <h2>{product.name}</h2>
          <p className="price">{product.price.toLocaleString()}원</p>
          <p className="desc">{product.info}</p>
          <div className="rating">⭐ 4.2 (572개 리뷰)</div>

          <div className="size-select">
            <label>사이즈</label>
            <select value={size} onChange={(e) => setSize(e.target.value)}>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
            </select>
          </div>

          <div className="detail-buttons">
            <button className="buy">바로 구매</button>
            <button className="cart" onClick={() => addToCart(product)}>쇼핑백 담기</button>
            <button className="gift">선물하기</button>
          </div>
        </div>
      </div>

      <div className="detail-tabs">
        <button onClick={() => setActiveTab("detail")} className={activeTab === "detail" ? "active" : ""}>DETAIL</button>
        <button onClick={() => setActiveTab("review")} className={activeTab === "review" ? "active" : ""}>REVIEW</button>
        <button onClick={() => setActiveTab("qa")} className={activeTab === "qa" ? "active" : ""}>Q&A</button>
        <button onClick={() => setActiveTab("delivery")} className={activeTab === "delivery" ? "active" : ""}>RETURN & DELIVERY</button>
      </div>

      <div className="tab-content">
        {activeTab === "detail" && (
          <div>
            <div className="info-box">
              <p>상품에 대한 안내 문구가 들어갑니다.</p>
            </div>
            {product.imgList.map((img, idx) => (
              <img key={idx} src={img} alt={`detail-${idx}`} className="detail-img" />
            ))}
          </div>
        )}

        {activeTab === "review" && (
          <div className="reviews">
            <h3>상품 리뷰 (총 572개)</h3>
            <div className="review-item">★★★★★ 아주 좋아요</div>
            <div className="review-item">★★★★ 만족해요</div>
            <div className="review-item">★★★ 보통이에요</div>
          </div>
        )}

        {activeTab === "qa" && (
          <div className="qa">
            <p>Q&A 게시판 준비중입니다.</p>
          </div>
        )}

        {activeTab === "delivery" && (
          <div className="delivery">
            <p>교환/반품/배송 안내</p>
          </div>
        )}
      </div>
    </div>
  );
}
