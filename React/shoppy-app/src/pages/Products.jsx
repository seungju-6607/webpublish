import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/data/products.json") 
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="products">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((p) => (
          <li key={p.id} className="product-item">
            <img src={p.image} alt={p.title} />
            <p>{p.title}</p>
            <span>{p.price}원</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
