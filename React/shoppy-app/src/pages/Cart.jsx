import { useCart } from "../context/CartContext.jsx";

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <section className="cart">
      <h2>장바구니</h2>
      {cartItems.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.pid}>
              <img src={item.image} alt={item.name} width="80" />
              <span>{item.name}</span>
              <span>{item.price.toLocaleString()}원</span>
              <button onClick={() => removeFromCart(item.pid)}>삭제</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
