import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartDropdownContainer, CartItems } from "./cart-dropdown.style";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map((carItem) => (
          <CartItem product={carItem} key={carItem.id} />
        ))}
      </CartItems>
      <Button
        onClick={() => {
          checkoutHandler();
        }}
      >
        Checkout
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
