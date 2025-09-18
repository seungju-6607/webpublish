import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <h1 className="logo">
          <Link to="/">Shoppy</Link>
        </h1>
        <nav className="nav">
          <Link to="/products">Products</Link>
          <FaShoppingCart className="cart-icon" />
          <Link to="/login" className="btn">Login</Link>
          <Link to="/signup" className="btn">Signup</Link>
        </nav>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <p>© 2025 Shoppy. All rights reserved.</p>
      </footer>
    </div>
  );
}
