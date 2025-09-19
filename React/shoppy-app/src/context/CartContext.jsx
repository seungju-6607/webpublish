import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [toast, setToast] = useState("");

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    console.log("장바구니 추가됨:", product); // 디버깅용 로그
    setToast(`${product.name} 장바구니에 담겼습니다!`);
    setTimeout(() => setToast(""), 2000); // 2초 후 알림 사라짐
  };

  const removeFromCart = (pid) => {
    setCartItems((prev) => prev.filter((item) => item.pid !== pid));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, toast }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
