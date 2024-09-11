import React, { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
  const cartContext = useContext(CartContext);
  const userProgress = useContext(UserProgressContext);

  const cartTotal = cartContext.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  function handleCloseCart() {
    userProgress.hideCart();
  }

  function handleCheckout() {
    userProgress.showCheckout();
  }

  return (
    <Modal className="cart" open={userProgress.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartContext.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            qty={item.quantity}
            price={item.price}
            onIncrease={() => cartContext.addItem(item)}
            onDecrease={() => cartContext.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartContext.items.length > 0 ? (
          <Button onClick={handleCheckout}>Go to checkout</Button>
        ) : (
          ""
        )}
      </p>
    </Modal>
  );
}
