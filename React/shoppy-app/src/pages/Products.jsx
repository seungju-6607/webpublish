import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/data/products.json")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="products">
      <h2>Products</h2>
      <ul className="product-list">
        {Array.isArray(products) &&
          products.map((p) => (
            <li key={p.pid} className="product-item">
              <Link to={`/products/${p.pid}`}>
                <img src={p.image} alt={p.name} />
                <p>{p.name}</p>
                <span>{p.price.toLocaleString()}원</span>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}
