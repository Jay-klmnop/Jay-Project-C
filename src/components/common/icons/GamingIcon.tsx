import GamingSmallSvg from "../../../assets/header-nav-sub/gaming.svg?react";

interface GamingIconProps {
  variant: "small" | "large";
  className?: string;
}

export default function GamingIcon({ variant, className }: GamingIconProps) {
  if (variant === "small") {
    return (
      <div>
        <GamingSmallSvg className={`${className ?? ""}`} />
      </div>
    );
  }

  /**if (variant === "large") {
    return (
      <div>
        <GamingLargeSvg className={`${className ?? ""}`} />
      </div>
    );
  }**/

  return null;
}
