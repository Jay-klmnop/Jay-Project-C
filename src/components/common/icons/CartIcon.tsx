import Cart from "../../../assets/header-user-actions/cart.svg?react";

interface CartIconProps {
  className?: string;
}

export default function CartIcon({ className }: CartIconProps) {
  return <Cart className={className} />;
}
