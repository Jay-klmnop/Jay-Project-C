import Burger from "../../../assets/header-mobile-burger/burger.svg?react";

interface BurgerIconProps {
  className?: string;
}

export default function BurgerIcon({ className }: BurgerIconProps) {
  return (
    <button className={`ml-4 ${className ?? ""}`}>
      <Burger className={className} />
    </button>
  );
}
