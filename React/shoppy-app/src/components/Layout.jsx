import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext.jsx";

export default function Layout({ children }) {
  const { toast } = useCart();

  return (
    <div className="layout">
      <header className="header">
        <h1 className="logo">
          <Link to="/">Shoppy</Link>
        </h1>
        <nav className="nav">
          <Link to="/products">Products</Link>
          <Link to="/cart">
            <FaShoppingCart className="cart-icon" />
          </Link>
          <Link to="/login" className="btn">Login</Link>
          <Link to="/signup" className="btn">Signup</Link>
        </nav>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <p>© 2025 Shoppy. All rights reserved.</p>
      </footer>

      {/* ✅ Toast 알림 표시 */}
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
