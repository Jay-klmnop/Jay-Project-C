import Cart from "../../../assets/figmaIcon/32px/Cart.svg?react";

interface CartIconProps {
  className?: string;
}

export default function CartIcon({ className }: CartIconProps) {
  return <Cart className={className} />;
}
