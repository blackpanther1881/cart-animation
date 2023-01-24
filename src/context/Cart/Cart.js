// @ts-ignore
import React, {
  createContext,
  useContext,
} from "react";
import anime from "animejs/lib/anime.es.js"

const CartContext = createContext({
  connect() { },
});

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider= ({
  children,
}) => {
  const connect = async (cartRef, productRef) => {
    try {
      // Get the position of the cart and product
      const cartPosition = cartRef.current.getBoundingClientRect();
      const productPosition = productRef.current.getBoundingClientRect();

      // Create a copy of the product image
      const copy = productRef.current.cloneNode(true);
      copy.style.position = 'absolute';
      copy.style.top = `${productPosition.top}px`;
      copy.style.left = `${productPosition.left}px`;
      document.body.appendChild(copy);

      // Animate the copy flying to the cart
      anime({
        targets: copy,
        duration: 1000,
        easing: 'easeInOutQuad',
        top: cartPosition.top,
        left: cartPosition.left,
        complete: () => {
          document.body.removeChild(copy);
        }
      });
    } catch (e) {
      console.error(e);
    }
  }

  const walletState = {
    connect,
  };

  return (
    <CartContext.Provider value={walletState}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
