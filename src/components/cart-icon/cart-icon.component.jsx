import "./cart-icon.style.jsx";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.style.jsx";
const CartIcon = () => {
  const { setIsCartOpen, isCartOpen, cartCount } = useContext(CartContext);
  const handleCartDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartIconContainer>
      <ShoppingIcon className="shopping-icon" onClick={handleCartDropdown} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
